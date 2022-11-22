import React from 'react';
import styles from './styles.module.sass';

export default function AllInOneCard() {
  return (
    <section className={styles.container}>
      <h2>Construtor de sites tudo em um</h2>
      <h3>
        Experimente o controle total sobre o processo de criação do seu site.
      </h3>
      <section className={styles.content}>
        <div className={styles.item}>
          <img src="https://imgur.com/xDcqpvR.png" alt="Site pré-construído" />
          <h3>Site pré-construído</h3>
          <p>
            Site pré-construído projetado para economizar seu tempo. Importe com
            alguns cliques e personalize-o para atender às suas necessidades.
          </p>
        </div>
        <div className={styles.item}>
          <img src="https://imgur.com/ojTbFKX.png" alt="Elementos de design" />
          <h3>Elementos de design</h3>
          <p>
            Embalados com opções, eles são altamente flexíveis para qualquer
            design e para qualquer finalidade. O único limite é a sua
            imaginação.
          </p>
        </div>
        <div className={styles.item}>
          <img src="https://imgur.com/q81nMWW.png" alt="Para alto desempenho" />
          <h3>Para alto desempenho</h3>
          <p>
            Experimente o controle total dos recursos do seu site que o
            capacitarão a tomar decisões superiores relacionadas ao desempenho.
          </p>
        </div>
        <div className={styles.item}>
          <img src="https://imgur.com/3QRMVx3.png" alt="Navegação Responsiva" />
          <h3>Navegação Responsiva</h3>
          <p>
            Fluido e responsivo em todos os tipos de dispositivos, de
            dispositivos móveis a desktops e tablets.
          </p>
        </div>
        <div className={styles.item}>
          <img src="https://imgur.com/s0TkNcb.png" alt="Conteúdo dinâmico" />
          <h3>Conteúdo dinâmico</h3>
          <p>
            Crie páginas exclusivas e layouts de postagem para o seu site,
            aproveitando o poder da funcionalidade de conteúdo dinâmico .
          </p>
        </div>
        <div className={styles.item}>
          <img
            src="https://imgur.com/HWWsCW0.png"
            alt="Construtor de lojas online"
          />
          <h3>Construtor de lojas online</h3>
          <p>
            Integrado com métodos de pagamentos e Correios. Permite que você
            construa lojas online de sucesso para vender qualquer coisa online.
          </p>
        </div>
      </section>
    </section>
  );
}
