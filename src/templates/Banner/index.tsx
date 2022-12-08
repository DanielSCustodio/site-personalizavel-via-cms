import React from 'react';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../service/prismic';
import { GetStaticProps } from 'next';

import styles from './styles.module.sass';

export default function Banner() {
  return (
    <section className={styles.container}>
      <section className={styles.callAction}>
        <h2>O Melhor e mais Criativo</h2>
        <h2>Construtor de Sites</h2>
        <p className={styles.text}>
          Aumente a credibilidade da sua marca. Saia na frente dos seus
          concorrentes, construa seu site agora!
        </p>
        <button>Começar a construir &nbsp;&nbsp;➜</button>
        <section className={styles.numbers}>
          <div>
            <h3>+30</h3>
            <p>Clientes satisfeitos</p>
          </div>
          <div>
            <h3>+70</h3>
            <p>Cases de sucesso</p>
          </div>
        </section>
      </section>
      <section className={styles.banner}>
        <img src="/images/banner.png" alt="" />
      </section>
    </section>
  );
}
