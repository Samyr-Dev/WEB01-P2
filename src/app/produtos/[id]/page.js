// src/app/produtos/[id]/page.js
"use client";

import { use, useState } from 'react';
import { produtosCopa } from '../../produtosMock';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './detalhe.module.css';

export default function ProdutoDetalhePage({ params }) {
  const { id } = use(params);
  const router = useRouter();
  
  const produto = produtosCopa.find((p) => p.id === id);

  const [imagemAtiva, setImagemAtiva] = useState(0);
  const [qtd, setQtd] = useState(1);

  if (!produto) {
    return (
      <main className={styles.errorContainer}>
        <h2>Produto Oficial não encontrado!</h2>
        <Link href="/produtos" className={styles.backButton}>Voltar para os Produtos</Link>
      </main>
    );
  }

  // FUNÇÕES DE NAVEGAÇÃO DAS SETAS (Ponto 2)
  const imagemProxima = () => {
    setImagemAtiva((prev) => (prev + 1) % produto.imagens.length);
  };

  const imagemAnterior = () => {
    setImagemAtiva((prev) => (prev - 1 + produto.imagens.length) % produto.imagens.length);
  };

  const adicionarAoCarrinho = () => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoMarket')) || [];
    const index = carrinhoAtual.findIndex(item => item.id === id);
    
    if (index > -1) {
      carrinhoAtual[index].quantidade += qtd;
    } else {
      carrinhoAtual.push({ id, quantidade: qtd });
    }
    
    localStorage.setItem('carrinhoMarket', JSON.stringify(carrinhoAtual));
    window.dispatchEvent(new Event('carrinhoAtualizado'));
    router.push('/carrinho');
  };

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        
        <div className={styles.imageColumn}>
          {/* Container da Imagem com os botões posicionados sobrepostos */}
          <div className={styles.mainImageWrapper}>
            <button onClick={imagemAnterior} className={`${styles.navArrow} ${styles.arrowLeft}`}>
              &#10094;
            </button>
            <img src={produto.imagens[imagemAtiva]} alt={produto.nome} className={styles.mainImage} />
            <button onClick={imagemProxima} className={`${styles.navArrow} ${styles.arrowRight}`}>
              &#10095;
            </button>
          </div>
          
          {/* Miniaturas ajustadas abaixo */}
          <div className={styles.thumbnails}>
            {produto.imagens.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt="Miniatura" 
                className={`${styles.thumb} ${imagemAtiva === index ? styles.thumbAtivo : ''}`}
                onClick={() => setImagemAtiva(index)}
              />
            ))}
          </div>
        </div>
        
        <div className={styles.infoColumn}>
          <span className={styles.brandBadge}>{produto.marca}</span>
          <h1 className={styles.productName}>{produto.nome}</h1>
          <p className={styles.category}>Categoria: {produto.categoria}</p>
          
          <div className={styles.priceContainer}>
            <span className={styles.priceValue}>R$ {produto.preco.toFixed(2)}</span>
          </div>

          <p className={styles.description}>{produto.descricao}</p>

          <div className={styles.qtdContainer}>
            <label className={styles.qtdLabel}>Quantidade:</label>
            <div className={styles.qtdSeletor}>
              <button onClick={() => setQtd(prev => Math.max(1, prev - 1))} className={styles.qtdBtn}>-</button>
              <input type="number" value={qtd} readOnly className={styles.qtdInput} />
              <button onClick={() => setQtd(prev => prev + 1)} className={styles.qtdBtn}>+</button>
            </div>
          </div>

          <div className={styles.actions}>
            <button onClick={adicionarAoCarrinho} className={styles.addToCartButton}>
              Adicionar ao Carrinho 🛒
            </button>
            <Link href="/produtos" className={styles.backLink}>← Voltar ao catálogo</Link>
          </div>
        </div>
      </div>
    </main>
  );
}