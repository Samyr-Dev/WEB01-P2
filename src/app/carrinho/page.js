// src/app/carrinho/page.js
"use client";

import { useState, useEffect } from 'react';
import { produtosCopa } from '../produtosMock';
import Link from 'next/link';
import styles from './carrinho.module.css';

export default function CarrinhoPage() {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [historico, setHistorico] = useState([]);

  const carregarDados = () => {
    const salvos = JSON.parse(localStorage.getItem('carrinhoMarket')) || [];
    const historicoSalvo = JSON.parse(localStorage.getItem('historicoCompras')) || [];
    
    const produtosCompletos = salvos.map(item => {
      const prod = produtosCopa.find(p => p.id === item.id);
      return prod ? { ...prod, quantidade: item.quantidade } : null;
    }).filter(Boolean);

    setItensCarrinho(produtosCompletos);
    setHistorico(historicoSalvo);
  };

  useEffect(() => {
    carregarDados();
  }, []);

  // NOVA FUNÇÃO: Altera a quantidade direto pelas setinhas do carrinho
  const alterarQuantidade = (id, novaQtd) => {
    if (novaQtd < 1) return; // Não deixa baixar de 1
    
    const salvos = JSON.parse(localStorage.getItem('carrinhoMarket')) || [];
    const index = salvos.findIndex(item => item.id === id);
    
    if (index > -1) {
      salvos[index].quantidade = novaQtd;
      localStorage.setItem('carrinhoMarket', JSON.stringify(salvos));
      carregarDados();
      window.dispatchEvent(new Event('carrinhoAtualizado'));
    }
  };

  const removerItem = (id) => {
    const salvos = JSON.parse(localStorage.getItem('carrinhoMarket')) || [];
    const atualizados = salvos.filter(item => item.id !== id);
    localStorage.setItem('carrinhoMarket', JSON.stringify(atualizados));
    carregarDados();
    window.dispatchEvent(new Event('carrinhoAtualizado'));
  };

  const finalizarCompra = () => {
    if (itensCarrinho.length === 0) return;
    alert('Pedido Finalizado com Sucesso!');
    
    const novoPedido = {
      data: new Date().toLocaleDateString('pt-BR'),
      itens: itensCarrinho.map(item => ({
        id: item.id,
        nome: item.nome,
        preco: item.preco,
        quantidade: item.quantidade,
        imagem: item.imagens[0]
      })),
      total: itensCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0)
    };

    const historicoAtual = JSON.parse(localStorage.getItem('historicoCompras')) || [];
    const novoHistorico = [novoPedido, ...historicoAtual];
    
    localStorage.setItem('historicoCompras', JSON.stringify(novoHistorico));
    localStorage.removeItem('carrinhoMarket');
    
    carregarDados();
    window.dispatchEvent(new Event('carrinhoAtualizado'));
  };

  const comprarNovamente = (itensPedido) => {
    const carrinhoAtual = JSON.parse(localStorage.getItem('carrinhoMarket')) || [];
    
    itensPedido.forEach(itemPedido => {
      const idx = carrinhoAtual.findIndex(c => c.id === itemPedido.id);
      if (idx > -1) {
        carrinhoAtual[idx].quantidade += itemPedido.quantidade;
      } else {
        carrinhoAtual.push({ id: itemPedido.id, quantidade: itemPedido.quantidade });
      }
    });

    localStorage.setItem('carrinhoMarket', JSON.stringify(carrinhoAtual));
    carregarDados();
    window.dispatchEvent(new Event('carrinhoAtualizado'));
    alert('Produtos reinjetados no carrinho!');
  };

  const valorTotal = itensCarrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Seu Carrinho de Seleção 🛒</h1>
      
      {itensCarrinho.length > 0 ? (
        <div className={styles.carrinhoEstrutura}>
          <div className={styles.listaProdutos}>
            {itensCarrinho.map((item) => (
              <div key={item.id} className={styles.itemCard}>
                <img src={item.imagens[0]} alt={item.nome} className={styles.itemImg} />
                <div className={styles.itemInfo}>
                  <h3>{item.nome}</h3>
                  <p className={styles.itemMarca}>{item.marca}</p>
                  <p className={styles.itemPreco}>
                    R$ {item.preco.toFixed(2)} un.
                  </p>
                  
                  {/* PONTO 1: Seletor de Quantidade idêntico ao da página de Detalhes */}
                  <div className={styles.qtdContainer}>
                    <div className={styles.qtdSeletor}>
                      <button onClick={() => alterarQuantidade(item.id, item.quantidade - 1)} className={styles.qtdBtn}>-</button>
                      <input type="number" value={item.quantidade} readOnly className={styles.qtdInput} />
                      <button onClick={() => alterarQuantidade(item.id, item.quantidade + 1)} className={styles.qtdBtn}>+</button>
                    </div>
                    <span className={styles.subtotalItem}>
                      Subtotal: <strong>R$ {(item.preco * item.quantidade).toFixed(2)}</strong>
                    </span>
                  </div>
                </div>
                <button onClick={() => removerItem(item.id)} className={styles.removeBtn}>Remover</button>
              </div>
            ))}
          </div>

          <div className={styles.resumoBox}>
            <h2>Resumo do Pedido</h2>
            <hr className={styles.divisor} />
            <div className={styles.totalRow}>
              <span>Subtotal:</span>
              <strong>R$ {valorTotal.toFixed(2)}</strong>
            </div>
            <button className={styles.checkoutBtn} onClick={finalizarCompra}>Fechar Pedido</button>
          </div>
        </div>
      ) : (
        <div className={styles.box}>
          <p className={styles.emptyText}>O seu carrinho está vazio no momento.</p>
          <Link href="/produtos" className={styles.shopBtn}>Explorar Produtos Oficiais</Link>
        </div>
      )}

      {/* HISTÓRICO DE COMPRAS REALIZADAS */}
      {historico.length > 0 && (
        <section className={styles.historicoSection}>
          <h2 className={styles.historicoTitle}>Compras Realizadas 📋</h2>
          <div className={styles.historicoLista}>
            {historico.map((pedido, index) => (
              <div key={index} className={styles.pedidoCard}>
                <div className={styles.pedidoHeader}>
                  <span>Pedido realizado em: <strong>{pedido.data}</strong></span>
                  <span>Total: <strong>R$ {pedido.total.toFixed(2)}</strong></span>
                </div>
                <div className={styles.pedidoItens}>
                  {pedido.itens.map((it, idx) => (
                    <div key={idx} className={styles.pedidoItemRow}>
                      <img src={it.imagem} alt={it.nome} className={styles.miniImg} />
                      <span>{it.nome} (x{it.quantidade})</span>
                    </div>
                  ))}
                </div>
                <button onClick={() => comprarNovamente(pedido.itens)} className={styles.recompraBtn}>
                  Comprar Novamente 🔄
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}