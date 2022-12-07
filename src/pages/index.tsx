import React from 'react';
import Head from 'next/head';
import { getPrismicClient } from '../service/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { GetStaticProps } from 'next';
import { getData } from './api/typeCustomer';
import { getFeature } from './api/features';
import Banner from '../templates/Banner';
import CustomerTypeCard from '../templates/CustomerTypeCard';
import Features from '../templates/Features';
import AllInOneCard from '../templates/AllInOneCard';

export default function Home({ info, featureData }) {
  return (
    <>
      <Head>
        <title>Home - Construtor de sites</title>
      </Head>
      <main>
        <Banner />
        <CustomerTypeCard info={info} />
        <Features featureData={featureData} />
        <AllInOneCard />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getData();
  const features = getFeature();
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'pagina_home'),
  ]);

  const info = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      callAction: item.callAction,
      image: item.image,
      labels: item.labels,
    };
  });

  const featureData = features.map((item) => {
    return {
      id: item.id,
      image: item.image,
    };
  });

  return {
    props: { info, featureData },
  };
};
