import "./styles/theme.css";        
import "./styles/global.css";       
import { CardAtivo } from "./component/cardAtivo";
import styles from "./app.module.css"; 

export function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}> Meu Portfólio 2026</h1>
      
      <div className={styles.grid}>
        {/* Card de Bitcoin */}
        <CardAtivo titulo="Bitcoin (BTC)">
          <p>Preço: R$ 350.000,00</p>
          <span style={{ color: 'var(--alta)' }}>+5.2% hoje</span>
        </CardAtivo>

        {/* Card de Fundo Imobiliário */}
        <CardAtivo titulo="Fundo Imobiliário (HGLG11)">
          <p>Dividendo: R$ 1,10</p>
          <span style={{ color: 'var(--alta)' }}>Rendimento estável</span>
        </CardAtivo>

        {/* Card de Ação */}
        <CardAtivo titulo="Empresa X (VALE3)">
          <p>Preço: R$ 65,20</p>
          <span style={{ color: 'var(--baixa)' }}>-1.8% hoje</span>
        </CardAtivo>
      </div>
    </div>
  );
}

