// src/app/sobre/page.js
import styles from './sobre.module.css';

export default function SobrePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>A Jornada das Marcas no Mundial</h1>
      <p className={styles.intro}>
        Mais do que futebol, a Copa do Mundo é o maior palco de inovação tecnológica e 
        design de vestuário do planeta.
      </p>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h2>Inovação Científica</h2>
          <p>
            Tecidos feitos a partir de poliéster reciclado retirado dos oceanos, sistemas 
            de gerenciamento térmico e aerodinâmica de alta precisão para as bolas oficiais.
          </p>
        </div>

        <div className={styles.card}>
          <h2>Cultura e Identidade</h2>
          <p>
            Cada padrão geométrico e combinação de cores conta a história e expressa o 
            orgulho de uma nação inteira gritando por um único objetivo.
          </p>
        </div>
      </section>
    </main>
  );
}