import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import banner from '../../../public/images/blog.jpg';

import styles from './styles.module.sass';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Construtor de sites</title>
      </Head>
      <main className={styles.container}>
        <h1>O melhor conteúdo sobre tecnologia</h1>
        <section className={styles.containerPosts}>
          <section className={styles.content}>
            <Link href="/">
              <Image
                src={banner}
                alt="Título do post"
                width={500}
                height={300}
                quality={100}
              />
              <strong>Criando meu aplicativo</strong>
              <time>28 Novembro 2022</time>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </Link>
          </section>
          <section className={styles.content}>
            <Link href="/">
              <Image
                src={banner}
                alt="Título do post"
                width={500}
                height={300}
                quality={100}
              />
              <strong>Criando meu aplicativo</strong>
              <time>28 Novembro 2022</time>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </Link>
          </section>
          <section className={styles.content}>
            <Link href="/">
              <Image
                src={banner}
                alt="Título do post"
                width={500}
                height={300}
                quality={100}
              />
              <strong>Criando meu aplicativo</strong>
              <time>28 Novembro 2022</time>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.
              </p>
            </Link>
          </section>
        </section>
      </main>
    </>
  );
}
