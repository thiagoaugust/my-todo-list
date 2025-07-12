// Arquivo: src/components/MenuLateral.js

import Link from 'next/link';

export default function MenuLateralEsquerdo() {
  return (
    <aside style={estiloMenu}>
      <nav>
        <ul style={estiloLista}>
          <li style={estiloItemLista}>
            <Link href="/configuracoes" style={estiloLink}>
              Configurações
            </Link>
          </li>
          <li style={estiloItemLista}>
            <Link href="/perfil" style={estiloLink}>
              Perfil
            </Link>
          </li>
          <li style={estiloItemLista}>
            <Link href="/ajuda" style={estiloLink}>
              Ajuda
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

// --- Estilos do Componente ---

const estiloMenu = {
  width: '220px',
  backgroundColor: '#2E8B57', // Um tom de verde (SeaGreen)
  padding: '20px 10px',
  height: '100%', // Ocupa toda a altura do container pai
  color: 'white',
};

const estiloLista = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const estiloItemLista = {
  marginBottom: '10px',
};

const estiloLink = {
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  padding: '10px',
  borderRadius: '5px',
  fontFamily: 'sans-serif',
};