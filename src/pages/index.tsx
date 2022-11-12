import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import Main from '../templates/Main';
import { getData } from './api/typeCustomer';
import CustomerTypeCard from '../templates/CustomerTypeCard';

export default function Home({ info }) {
  return (
    <>
      <Head>
        <title>Home - Construtor de sites</title>
      </Head>
      <Main />
      <CustomerTypeCard info={info} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getData();

  const info = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      callAction: item.callAction,
      image: item.image,
      labels: item.labels,
    };
  });

  return {
    props: { info },
  };
};
