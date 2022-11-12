import React from 'react';
import styles from './styles.module.sass';

interface Data {
  id: number;
  title: string;
  callAction: string;
  image: string;
  labels: string[];
}

interface DataProps {
  info: Data[];
}

export default function CustomerTypeCard({ info }: DataProps) {
  return (
    <section className={styles.container}>
      {info.map((item) => (
        <div key={item.id} className={styles.content}>
          <h2>{item.title}</h2>
          <h3>{item.callAction}</h3>
          <img src={item.image} alt={item.title} />
          <div key={item.id} className={styles.labels}>
            {item.labels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
