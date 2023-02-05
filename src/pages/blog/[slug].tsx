import React from 'react';
import { GetServerSideProps } from 'next';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../service/prismic';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from './post.module.sass';

interface PostRecent {
  title: string;
  description: string;
  slug: string;
  cover: string;
}

interface PostProps {
  postsRecents: PostRecent[];
  post: {
    slug: string;
    title: string;
    description: string;
    cover: string;
    updatedAt: string;
  };
}

export default function Post({ post, postsRecents }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} - Construtor de sites</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.article}>
          <Image
            src={post.cover}
            width={150}
            height={150}
            alt={post.title}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsndJbDwAFkwIvDmlTiAAAAABJRU5ErkJggg=="
          />
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.description }}
          ></div>
        </section>
        <aside className={styles.postsRecents}>
          <h2>Posts Recentes</h2>
          {postsRecents.map(
            (item, index) =>
              index < 6 && (
                <Link
                  href={`/blog/${item.slug}`}
                  key={item.slug}
                  className={styles.postsRecentsContent}
                >
                  <Image
                    src={item.cover}
                    width={50}
                    height={50}
                    alt={post.title}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsndJbDwAFkwIvDmlTiAAAAABJRU5ErkJggg=="
                  />
                  <div>
                    <h2>
                      <strong>{item.title}</strong>
                    </h2>
                    <p>{item.description.slice(0, 105)}...</p>
                  </div>
                </Link>
              ),
          )}
        </aside>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { slug } = params;

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('post', String(slug), {});
  if (!response) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false,
      },
    };
  }

  const responseRecents = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]',
      fetch: ['titulo_do_post', 'conteudo_do_post', 'imagem_do_post'],
      pageSize: 6,
    },
  );

  const post = {
    slug,
    title: RichText.asText(response.data.titulo_do_post),
    description: RichText.asHtml(response.data.conteudo_do_post),
    cover: response.data.imagem_do_post.url,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      },
    ),
  };

  const postsRecents = responseRecents.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.titulo_do_post),
      description:
        post.data.conteudo_do_post.find(
          (content) => content.type === 'paragraph',
        )?.text ?? '',
      cover: post.data.imagem_do_post.url,
    };
  });

  return {
    props: { post, postsRecents },
  };
};
