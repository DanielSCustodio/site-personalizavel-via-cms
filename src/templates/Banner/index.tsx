import React from 'react';

import styles from './styles.module.sass';

type TypeBanner = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
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
  return (
    <section className={styles.container}>
      <section className={styles.callAction}>
        <h1>{contentBanner.title}</h1>
        <p className={styles.text}>{contentBanner.subtitle}</p>
        <a href={contentBanner.buttonLink}>
          <button>{contentBanner.buttonText} &nbsp;&nbsp;➜</button>
        </a>
        <section className={styles.numbers}>
          <div>
            <h3>{contentBanner.caseOneNumber}</h3>
            <p>{contentBanner.caseOneText}</p>
          </div>
          <div>
            <h3>{contentBanner.caseTwoNumber}</h3>
            <p>{contentBanner.caseTwoText}</p>
          </div>
        </section>
      </section>
      <section className={styles.banner}>
        <img src={contentBanner.image} alt="" />
      </section>
    </section>
  );
}
