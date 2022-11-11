import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.svg';
import styles from './styles.module.sass';
import { ActiveLink } from '../ActiveLink';

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/">
          <Image src={logo} alt="Logo do site" />
        </Link>
        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>

          <ActiveLink href="/sobre" activeClassName={styles.active}>
            <a>Sobre nós</a>
          </ActiveLink>
        </nav>
        <a href="#" type="button" className={styles.readyButton}>
          Começar
        </a>
      </div>
    </header>
  );
}
