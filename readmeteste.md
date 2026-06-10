# CopaMarket 2026 - Catálogo Interativo de Produtos

Aplicação Web responsiva desenvolvida como avaliação prática da prova P2 para a disciplina de **Programação Web I** no Curso de Engenharia de Software (Turma ESN-5) do Centro Universitário Alfredo Nasser (UNIFAN).

O projeto consiste em um e-commerce voltado para artigos de grandes marcas (Nike, Adidas, Puma) na Copa do Mundo 2026, utilizando arquitetura moderna de renderização e controle dinâmico de estados.

## 🚀 Tecnologias Utilizadas

* **Next.js 16 (App Router)** - Roteamento baseado em arquivos estruturados e otimização de build.
* **React 19** - Componentização modular atômica e gerenciamento de ciclo de vida.
* **CSS Modules** - Escopo de estilização estritamente local (`.module.css`) livre de conflitos globais de classes.
* **HTML5 & JavaScript (ES6+)** - Estruturação semântica e manipulação assíncrona de coleções de dados.

## 🛠️ Funcionalidades Implementadas

* **Roteamento Dinâmico:** Implementação de 5 rotas completas (Home, Listagem de Produtos, Sobre, Carrinho Ativo e Rota Dinâmica de Detalhes do Produto).
* **Filtros em Tempo Real:** Uso de React Hooks (`useState`) integrado a seletores de texto e marca para filtragem instantânea na interface de listagem.
* **Carrossel de Imagens:** Visualização de múltiplas imagens na ficha técnica do produto por meio de miniaturas clicáveis e botões de setas flutuantes sobrepostos.
* **Controle de Quantidades Integrado:** Incremento e decremento dinâmico de volumes tanto na página do produto quanto dentro do fluxo interno do carrinho, com cálculo automático de subtotal por item e total geral.
* **Histórico de Compras Persistido:** Gravação persistente e isolada no `localStorage` de pedidos processados ao clicar em finalizar compra, permitindo a recomposição e reinjeção automática de itens antigos no carrinho via botão de Recompra.

## 📊 Checklist de Avaliação Prática (8,0 Pontos)

- [x] Criação da estrutura de workspace utilizando o `create-next-app` **(0,5 pt)**
- [x] Modularização da interface em pelo menos 5 componentes altamente reutilizáveis **(1,5 pts)**
- [x] Manipulação reativa de estados com `useState` para filtragens e controle do carrinho **(1,5 pts)**
- [x] Configuração correta de 5 rotas de navegação, incluindo caminhos dinâmicos `app/produtos/[id]/page.js` **(1,5 pts)**
- [x] Layout fluido e responsivo estruturado via Flexbox, Grid e Media Queries locais **(1,5 pts)**
- [x] Versionamento completo e controle de ramificações através de repositório público no GitHub **(0,5 pt)**
- [x] Processo de compilação automatizado e hospedagem ao vivo realizada na plataforma Vercel **(1,0 pt)**