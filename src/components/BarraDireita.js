// Arquivo: src/components/BarraDireita.js

// 1. Essencial: Componentes com interatividade e estado (hooks) precisam ser Client Components.
'use client'; 

import { useState } from 'react';
import Calendar from 'react-calendar';

// 2. Importe o CSS padrão do calendário para que ele funcione.
import 'react-calendar/dist/Calendar.css'; 

// 3. (Opcional) Importe nosso CSS customizado que criaremos no próximo passo.
import '../app/calendario.css'; 

export default function BarraDireita() {
  const [data, setData] = useState(new Date());

  return (
    <aside style={estiloBarra}>
      <h3 style={{ fontFamily: 'sans-serif', textAlign: 'center' }}>Calendário</h3>
      <div>
        <Calendar onChange={setData} value={data} />
      </div>
    </aside>
  );
}

const estiloBarra = {
  width: '300px',
  padding: '20px',
  backgroundColor: '#f8f9fa',
  borderLeft: '1px solid #dee2e6'
};