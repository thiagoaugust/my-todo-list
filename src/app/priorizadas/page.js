// Arquivo: src/app/priorizadas/page.js
'use client';

import { useTarefas } from '../../context/TarefasContext'; // 1. Importe o Hook

export default function PaginaPriorizadas() {
  // 2. Pegue a lista de tarefas priorizadas do contexto
  const { tarefasPriorizadas } = useTarefas();

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Itens Priorizados</h1>
      {tarefasPriorizadas.length === 0 ? (
        <p>Nenhum item foi priorizado ainda.</p>
      ) : (
        <div style={{ marginTop: '2rem' }}>
          {tarefasPriorizadas.map((tarefa) => (
            <div key={tarefa.id} style={estiloItemTarefa}>
              <span>{tarefa.texto}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


const estiloItemTarefa = {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
  borderBottom: '1px solid #eee',
  fontSize: '18px',
};