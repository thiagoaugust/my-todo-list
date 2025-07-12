// Arquivo: src/app/page.js
'use client';

import { useState } from 'react';
import { useTarefas } from '../context/TarefasContext'; // 1. Importe o nosso Hook

export default function CaixaDeEntrada() {
  // 2. Pegue o estado e as funções do contexto
  const { tarefas, adicionarTarefa, toggleTarefa, priorizarTarefa } = useTarefas();
  const [novaTarefaTexto, setNovaTarefaTexto] = useState('');

  const handleAdicionar = () => {
    adicionarTarefa(novaTarefaTexto);
    setNovaTarefaTexto('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleAdicionar();
  };

  return (
    <div>
      <h1>Caixa de Entrada</h1>
      <div style={estiloContainerInput}>
        <input
          type="text"
          value={novaTarefaTexto}
          onChange={(e) => setNovaTarefaTexto(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Adicionar uma nova tarefa..."
          style={estiloInput}
        />
        <button onClick={handleAdicionar} style={estiloBotao}>✅</button>
      </div>
      <div style={{ marginTop: '2rem' }}>
        {tarefas.map((tarefa) => (
          <div key={tarefa.id} style={estiloItemTarefa}>
            <input
              type="checkbox"
              checked={tarefa.completa}
              onChange={() => toggleTarefa(tarefa.id)}
              style={{ marginRight: '10px' }}
            />
            <span style={{ flex: 1, textDecoration: tarefa.completa ? 'line-through' : 'none' }}>
              {tarefa.texto}
            </span>
            {/* 3. Botão para priorizar */}
            <button onClick={() => priorizarTarefa(tarefa.id)} style={estiloBotaoPriorizar}>
              Priorizar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Estilos (a maioria já existia) ---
const estiloContainerInput = { display: 'flex', gap: '10px', marginTop: '1.5rem' };
const estiloInput = { flex: 1, padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' };
const estiloBotao = { padding: '10px 15px', fontSize: '16px', borderRadius: '5px', border: 'none', backgroundColor: '#2E8B57', color: 'white', cursor: 'pointer' };
const estiloItemTarefa = { display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #eee', fontSize: '18px', fontFamily: 'sans-serif' };
// Estilo para o novo botão
const estiloBotaoPriorizar = {
  padding: '5px 10px',
  fontSize: '12px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#FFC107', // Amarelo
  color: '#333',
  cursor: 'pointer',
  marginLeft: '10px',
};