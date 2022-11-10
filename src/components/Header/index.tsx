import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import styles from './styles.module.sass';
import ActiveLink from '../ActiveLink';

export default function index() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <Image src={logo} alt="Logo do site" />
        </Link>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <span>Home</span>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <span>Posts</span>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <span>Sobre nós</span>
          </ActiveLink>
        </nav>
        <a href="#" type="button" className={styles.readyButton}>
          Começar
        </a>
      </div>
    </header>
  );
}
