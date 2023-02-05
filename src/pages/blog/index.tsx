import React from 'react';
import { GetStaticProps } from 'next';
import { getPrismicClient } from '../../service/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from 'react-icons/fi';
import styles from './styles.module.sass';

type Post = {
  slug: string;
  title: string;
  description: string;
  cover: string;
  updatedAt: string;
};
interface PostsProps {
  postsAPI: Post[];
  page: string;
  totalPage: string;
}

export default function Blog({ postsAPI, page, totalPage }: PostsProps) {
  const [currentPage, setCurrentPage] = React.useState(Number(page));
  const [posts, setPosts] = React.useState(postsAPI || []);

  async function reqPost(pageNumber: number) {
    const prismic = getPrismicClient();
    const response = await prismic.query(
      [Prismic.Predicates.at('document.type', 'post')],
      {
        orderings: '[document.last_publication_date desc]',
        fetch: ['titulo_do_post', 'conteudo_do_post', 'imagem_do_post'],
        pageSize: 3,
        page: String(pageNumber),
      },
    );
    return response;
  }

  async function navigatePage(pageNumber: number) {
    const response = await reqPost(pageNumber);
    if (response.results.length === 0) {
      return;
    }

    const getPosts = response.results.map((post) => {
      return {
        slug: post.uid,
        title: RichText.asText(post.data.titulo_do_post),
        description:
          post.data.conteudo_do_post.find(
            (content) => content.type === 'paragraph',
          )?.text ?? '',
        cover: post.data.imagem_do_post.url,
        updatedAt: new Date(post.last_publication_date).toLocaleDateString(
          'pt-BR',
          {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          },
        ),
      };
    });
    setCurrentPage(pageNumber);
    setPosts(getPosts);
  }

  return (
    <>
      <Head>
        <title>Blog - Construtor de sites</title>
      </Head>
      <main className={styles.container}>
        <h1>O melhor conteúdo sobre tecnologia</h1>
        <section className={styles.containerPosts}>
          {posts.map((post) => (
            <section className={styles.content} key={post.slug}>
              <Link href={`/posts/${post.slug}`}>
                <Image
                  src={post.cover}
                  alt={post.title}
                  width={200}
                  height={200}
                  quality={100}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPsndJbDwAFkwIvDmlTiAAAAABJRU5ErkJggg=="
                />
                <strong>{post.title}</strong>
                <time>{post.updatedAt}</time>
                <p>{post.description.slice(0, 100)}...</p>
              </Link>
            </section>
          ))}
        </section>
        <section className={styles.buttonsNavigation}>
          {Number(currentPage) >= 2 && (
            <div>
              <button onClick={() => navigatePage(1)}>
                <FiChevronsLeft size={25} />
              </button>
              <button onClick={() => navigatePage(Number(currentPage - 1))}>
                <FiChevronLeft size={25} />
              </button>
            </div>
          )}
          {Number(currentPage) < Number(totalPage) && (
            <div>
              <button onClick={() => navigatePage(Number(currentPage + 1))}>
                <FiChevronRight size={25} />
              </button>
              <button onClick={() => navigatePage(Number(totalPage))}>
                <FiChevronsRight size={25} />
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]',
      fetch: ['titulo_do_post', 'conteudo_do_post', 'imagem_do_post'],
      pageSize: 3,
    },
  );

  const postsAPI = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.titulo_do_post),
      description:
        post.data.conteudo_do_post.find(
          (content) => content.type === 'paragraph',
        )?.text ?? '',
      cover: post.data.imagem_do_post.url,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        },
      ),
    };
  });

  return {
    props: { postsAPI, page: response.page, totalPage: response.total_pages },
    revalidate: 60 * 30, // Atualiza cada 30 minutos
  };
};
