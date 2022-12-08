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

export default function Home({ info, featureData, contentPrismic }) {
  return (
    <>
      <Head>
        <title>{contentPrismic.title} - Construtor de sites</title>
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

  const { titulo_da_pagina_inicial } = response.results[0].data;

  const contentPrismic = {
    title: RichText.asText(titulo_da_pagina_inicial),
  };

  console.log(contentPrismic);

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
    props: { info, featureData, contentPrismic },
    revalidate: 60, //consulta na API a cada 60 segundos
  };
};
