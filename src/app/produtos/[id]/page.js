// src/app/produtos/[id]/page.js
import { produtosCopa } from '../../produtosMock';
import Link from 'next/link';
import styles from './detalhe.module.css';

// Transformamos a função da página em ASSÍNCRONA para poder usar o await no params
export default async function ProdutoDetalhePage({ params }) {
  // Resolve a Promise do params para obter os dados da URL corretamente
  const { id } = await params;
  
  // Busca o produto correspondente no Mock usando o ID resolvido
  const produto = produtosCopa.find((p) => p.id === id);

  // Caso o produto não seja encontrado
  if (!produto) {
    return (
      <main className={styles.errorContainer}>
        <h2>Produto Oficial não encontrado!</h2>
        <p>O item que você está procurando não consta no catálogo da Copa 2026.</p>
        <Link href="/produtos" className={styles.backButton}>Voltar para os Produtos</Link>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageColumn}>
          <img src={produto.imagem} alt={produto.nome} className={styles.mainImage} />
        </div>
        
        <div className={styles.infoColumn}>
          <span className={styles.brandBadge}>{produto.marca}</span>
          <h1 className={styles.productName}>{produto.nome}</h1>
          <p className={styles.category}>Categoria: {produto.categoria}</p>
          
          <div className={styles.priceContainer}>
            <span className={styles.priceLabel}>Preço exclusivo:</span>
            <span className={styles.priceValue}>R$ {produto.preco.toFixed(2)}</span>
          </div>

          <p className={styles.description}>{produto.descricao}</p>

          <div className={styles.actions}>
            <Link href="/carrinho" className={styles.addToCartButton}>
              Adicionar ao Carrinho 🛒
            </Link>
            <Link href="/produtos" className={styles.backLink}>
              ← Voltar ao catálogo
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}