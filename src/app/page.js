// src/app/page.js
import Link from 'next/link';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.hero}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.badge}>Esporte & Performance</span>
          <h1 className={styles.title}>O Mundo Inteiro em Campo</h1>
          <p className={styles.subtitle}>
            Explore os mantos sagrados, as chuteiras tecnológicas e os equipamentos 
            oficiais que as maiores marcas do planeta prepararam para a Copa do Mundo 2026.
          </p>
          <div className={styles.actions}>
            <Link href="/produtos" className={styles.primaryBtn}>
              Ver Catálogo Completo
            </Link>
            <Link href="/sobre" className={styles.secondaryBtn}>
              Conhecer a História
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}