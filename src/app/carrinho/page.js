// src/app/carrinho/page.js
import Link from 'next/link';
import styles from './carrinho.module.css';

export default function CarrinhoPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Seu Carrinho de Seleção</h1>
      
      <div className={styles.box}>
        <p className={styles.emptyText}>
          O seu carrinho está vazio no momento. Que tal convocar alguns itens para o seu armário?
        </p>
        <Link href="/produtos" className={styles.shopBtn}>
          Explorar Produtos Oficiais
        </Link>
      </div>
    </main>
  );
}