// Arquivo: src/app/layout.js

import MenuSuperior from '../components/MenuSuperior';
import MenuLateral from '../components/MenuLateral';
import BarraDireita from '../components/BarraDireita';
import { TarefasProvider } from '../context/TarefasContext'; // 1. Importe o Provider

export const metadata = {
  title: 'Minha Caixa de Entrada',
  description: 'Uma aplicação simples de caixa de entrada com Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#f0f2f5' }}>
        {/* 2. Envolva tudo com o Provider */}
        <TarefasProvider>
          <MenuSuperior />
          <div style={{ display: 'flex', height: 'calc(100vh - 62px)' }}>
            <MenuLateral />
            <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
              {children}
            </main>
            <BarraDireita />
          </div>
        </TarefasProvider>
      </body>
    </html>
  );
}