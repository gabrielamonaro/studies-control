import React, { useState } from 'react';
import Form from './Components/Form';
import List from './Components/List';
import './App.css'
import Cronometro from './Components/Cronometro';
import { iTarefa } from './types/tarefa';

function App() {

  const [tarefas, setTarefas] = useState <iTarefa[]> ([])
  const [itemSelecionado, setItemSelecionado] = useState <iTarefa>()

  function selecionaTarefa(tarefaSelecionada: iTarefa)
  {
      setItemSelecionado(tarefaSelecionada)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id == tarefaSelecionada.id ? true : false
      })))
  }

  function finalizarTarefa()
  {
    if(itemSelecionado)
    {
      setItemSelecionado(undefined)

      setTarefas(tarefasAnteriores => 
        tarefasAnteriores.map(tarefa => {
        if(tarefa.id === itemSelecionado.id)
        {
          return {
            ...tarefa, 
            selecionado: false,
            completado: true
          }
        }
        return tarefa
      }))
    }
  }

  return (
    <div className="App">
      <Form setTarefas={setTarefas} tarefas={tarefas}></Form>
      <List 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
      ></List>
   
        <Cronometro
          selecionado={itemSelecionado} 
          finalizarTarefa={finalizarTarefa}
        />
    </div>
  );
}

export default App;
