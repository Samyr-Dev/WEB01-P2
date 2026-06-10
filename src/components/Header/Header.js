// src/components/Header/Header.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  const [quantidade, setQuantidade] = useState(0);

const atualizarContador = () => {
    if (typeof window !== 'undefined') {
      const salvos = JSON.parse(localStorage.getItem('carrinhoMarket')) || [];
      // Soma a quantidade de todas as unidades adicionadas
      const totalItens = salvos.reduce((acc, item) => acc + item.quantidade, 0);
      setQuantidade(totalItens);
    }
  };

  useEffect(() => {
    atualizarContador();

    // Escuta um evento customizado para atualizar o número em tempo real entre as páginas
    window.addEventListener('carrinhoAtualizado', atualizarContador);
    return () => window.removeEventListener('carrinhoAtualizado', atualizarContador);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>CopaMarket 2026</h1>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/carrinho">
            🛒 Carrinho {quantidade > 0 && <span className={styles.badge}>{quantidade}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
}