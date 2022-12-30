import React from 'react';

import styles from './styles.module.sass';

type TypeBanner = {
  title: string;
  subtitle: string;
  buttonText: string;
  caseOneNumber: string;
  caseOneText: string;
  caseTwoNumber: string;
  caseTwoText: string;
  image: string;
};

interface ContentBanner {
  contentBanner: TypeBanner;
}

export default function Banner({ contentBanner }: ContentBanner) {
  console.log(contentBanner);

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
