// Arquivo: src/context/TarefasContext.js
'use client';

import { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
const TarefasContext = createContext();

// 2. Cria o Provedor (o componente que vai fornecer o estado)
export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasPriorizadas, setTarefasPriorizadas] = useState([]);

  const adicionarTarefa = (texto) => {
    if (texto.trim() !== '') {
      const novaTarefa = { id: Date.now(), texto, completa: false };
      setTarefas([...tarefas, novaTarefa]);
    }
  };

  const toggleTarefa = (id) => {
    const novasTarefas = tarefas.map((t) =>
      t.id === id ? { ...t, completa: !t.completa } : t
    );
    setTarefas(novasTarefas);
  };

  const priorizarTarefa = (id) => {
    // Encontra a tarefa a ser movida
    const tarefaParaMover = tarefas.find((t) => t.id === id);
    if (tarefaParaMover) {
      // Adiciona à lista de priorizadas
      setTarefasPriorizadas([...tarefasPriorizadas, tarefaParaMover]);
      // Remove da lista original
      setTarefas(tarefas.filter((t) => t.id !== id));
    }
  };

  return (
    <TarefasContext.Provider
      value={{
        tarefas,
        tarefasPriorizadas,
        adicionarTarefa,
        toggleTarefa,
        priorizarTarefa,
      }}
    >
      {children}
    </TarefasContext.Provider>
  );
}

// 3. Cria um Hook customizado para facilitar o uso do contexto
export function useTarefas() {
  return useContext(TarefasContext);
}