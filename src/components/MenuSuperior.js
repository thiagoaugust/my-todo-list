// Em src/components/MenuSuperior.js
import Link from 'next/link';

export default function MenuSuperior() {
  return (
    <nav style={{
      backgroundColor: '#333',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'center',
      gap: '20px'
    }}>
      <Link href="/" style={linkStyle}>
        Caixa de Entrada
      </Link>
      <Link href="/priorizadas" style={linkStyle}>
        Priorizadas
      </Link>
    </nav>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  padding: '10px 15px',
  backgroundColor: '#54575aff',
  borderRadius: '5px',
  fontFamily: 'sans-serif',
  fontWeight: 'bold'
};