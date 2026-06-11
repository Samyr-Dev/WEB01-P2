// src/components/ProductCard/ProductCard.js
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ id, nome, marca, preco, imagens }) {
  return (
    <Link href={`/produtos/${id}`} className={styles.cardLink}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={imagens[0]} alt={nome} className={styles.image} />
          <span className={styles.badge}>{marca}</span>
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{nome}</h3>
          <p className={styles.price}>R$ {preco.toFixed(2)}</p>
          <span className={styles.buttonSimulado}>
            Ver Detalhes
          </span>
        </div>
      </div>
    </Link>
  );
}