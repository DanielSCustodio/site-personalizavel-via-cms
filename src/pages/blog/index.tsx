import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  FiChevronLeft,
  FiChevronsLeft,
  FiChevronRight,
  FiChevronsRight,
} from 'react-icons/fi';
import banner from '../../../public/images/blog.jpg';

import styles from './styles.module.sass';
import { icons } from 'react-icons';

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
        <section className={styles.buttonsNavigation}>
          <div>
            <button>
              <FiChevronsLeft size={25} />
            </button>
            <button>
              <FiChevronLeft size={25} />
            </button>
          </div>
          <div>
            <button>
              <FiChevronRight size={25} />
            </button>
            <button>
              <FiChevronsRight size={25} />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
