// src/components/FilterBar/FilterBar.js
import styles from './FilterBar.module.css';

export default function FilterBar({ busca, setBusca, marca, setMarca }) {
  return (
    <div className={styles.filterContainer}>
      <input
        type="text"
        placeholder="Buscar produto da Copa..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className={styles.inputBusca}
      />
      
      <select
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
        className={styles.selectMarca}
      >
        <option value="">Todas as Marcas</option>
        <option value="Nike">Nike</option>
        <option value="Adidas">Adidas</option>
        <option value="Puma">Puma</option>
      </select>
    </div>
  );
}