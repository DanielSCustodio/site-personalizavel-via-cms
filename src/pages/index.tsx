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

export default function Home({
  info,
  featureData,
  contentTitle,
  contentBanner,
}) {
  return (
    <>
      <Head>
        <title>{contentTitle.title} - Construtor de sites</title>
      </Head>
      <main>
        <Banner contentBanner={contentBanner} />
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

  //--------------------
  const title = await prismic.query([
    Prismic.Predicates.at('document.type', 'pagina_home'),
  ]);
  const { titulo_da_pagina_inicial } = title.results[0].data;
  const contentTitle = {
    title: RichText.asText(titulo_da_pagina_inicial),
  };
  //--------------------
  const banner = await prismic.query([
    Prismic.Predicates.at('document.type', 'home'),
  ]);
  const {
    titulo_do_banner,
    subtitle,
    button,
    numero_do_caso1,
    texto_do_caso1,
    numero_do_caso2,
    texto_do_caso2,
    imagem_do_banner,
  } = banner.results[0].data;

  const contentBanner = {
    title: RichText.asText(titulo_do_banner),
    subtitle: RichText.asText(subtitle),
    buttonText: button,
    caseOneNumber: RichText.asText(numero_do_caso1),
    caseOneText: RichText.asText(texto_do_caso1),
    caseTwoNumber: RichText.asText(numero_do_caso2),
    caseTwoText: RichText.asText(texto_do_caso2),
    image: imagem_do_banner.url,
  };
  console.log('--<', contentBanner);

  //--------------------

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
    props: { info, featureData, contentTitle, contentBanner },
    revalidate: 60, //consulta na API a cada 60 segundos
  };
};
