import React from 'react';
import {
  MdBuild,
  MdWeb,
  MdOutlineMobileScreenShare,
  MdTextSnippet,
  MdShutterSpeed,
} from 'react-icons/md';
import styles from './styles.module.sass';

interface Data {
  id: string;
  image: string;
}

interface DataProps {
  featureData: Data[];
}

export default function Features({ featureData }: DataProps) {
  const [feature, setFeature] = React.useState('cv');
  return (
    <section className={styles.container}>
      <img src="images/logo.svg" alt="" />
      <h2>Projete qualquer coisa, construa tudo</h2>
      <h3>
        Projete e lance seu site rapidamente e nenhum conhecimento de
        codificação é necessário.
      </h3>
      <section className={styles.content}>
        <section className={styles.buttons}>
          <button onClick={() => setFeature('cv')}>
            <MdBuild /> construtor visual
          </button>
          <button onClick={() => setFeature('cl')}>
            <MdWeb /> construtor de layout
          </button>
          <button onClick={() => setFeature('vm')}>
            <MdOutlineMobileScreenShare />
            versão mobile
          </button>
          <button onClick={() => setFeature('cf')}>
            <MdTextSnippet />
            construtor de formulário
          </button>
          <button onClick={() => setFeature('ad')}>
            <MdShutterSpeed />
            assistente de desempenho
          </button>
        </section>
        <section className={styles.images}>
          {featureData &&
            featureData
              .filter((item) => item.id === feature)
              .map((feature) => (
                <div key={feature.id}>
                  <img src={feature.image} alt={feature.image} />
                </div>
              ))}
        </section>
      </section>
    </section>
  );
}
