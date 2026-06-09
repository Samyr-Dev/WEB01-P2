// src/components/Header/Header.js
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>CopaMarket 2026</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/carrinho">🛒 Carrinho</Link>
        </nav>
      </div>
    </header>
  );
}