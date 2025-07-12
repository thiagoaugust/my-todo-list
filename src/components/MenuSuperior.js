// Em src/components/MenuSuperior.js
import Link from 'next/link';

export default function MenuSuperior() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      display: 'flex',
      // Altere esta linha para alinhar os itens à direita
      justifyContent: 'flex-end', // <-- ANTES ERA 'center'
      gap: '20px'
    }}>
      <Link href="/" style={btCaixaEntrada}>
        Caixa de Entrada
      </Link>
      <Link href="/priorizadas" style={btPriorizadas}>
        Priorizadas
      </Link>
    </nav>
  );
}

const btCaixaEntrada = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 15px',
  backgroundColor: '#54575aff',
  borderRadius: '5px',
  fontFamily: 'sans-serif',
  fontWeight: 'bold'
};

const btPriorizadas = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 15px',
  backgroundColor: '#b9c239ff',
  borderRadius: '5px',
  fontFamily: 'sans-serif',
  fontWeight: 'bold'
};