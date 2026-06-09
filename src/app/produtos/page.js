// src/app/produtos/page.js
"use client";

import { useState } from 'react';
import { produtosCopa } from '../produtosMock';
import ProductCard from '../../components/ProductCard/ProductCard';
import FilterBar from '../../components/FilterBar/FilterBar';
import styles from './produtos.module.css';

export default function ProdutosPage() {
  const [busca, setBusca] = useState('');
  const [marca, setMarca] = useState('');

  // Lógica dinâmica de filtragem em tempo real
  const produtosFiltrados = produtosCopa.filter((produto) => {
    const combinaBusca = produto.nome.toLowerCase().includes(busca.toLowerCase());
    const combinaMarca = marca === '' || produto.marca === marca;
    return combinaBusca && combinaMarca;
  });

  return (
    <main className={styles.mainContainer}>
      <h2 className={styles.title}>Artigos Oficiais - Copa do Mundo 2026</h2>
      
      {/* Componente de Filtro */}
      <FilterBar 
        busca={busca} 
        setBusca={setBusca} 
        marca={marca} 
        setMarca={setMarca} 
      />

      {/* Grid Responsivo de Itens */}
      {produtosFiltrados.length > 0 ? (
        <div className={styles.grid}>
          {produtosFiltrados.map((produto) => (
            <ProductCard key={produto.id} {...produto} />
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>Nenhum produto oficial encontrado para essa busca.</p>
      )}
    </main>
  );
}