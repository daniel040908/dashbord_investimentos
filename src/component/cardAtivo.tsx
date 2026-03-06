import styles from './cardAtivo.module.css';

export function CardAtivo({ titulo, children }: { titulo: any; children: any; }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.titulo}>{titulo}</h3>
      <div className={styles.conteudo}>{children}</div>
    </div>
  );
}
