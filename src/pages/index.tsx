import Head from 'next/head';
import React from 'react';
import Main from '../templates/Main';
import styles from '../styles/home.module.sass';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Construtor de sites</title>
      </Head>
      <Main />
    </>
  );
}
