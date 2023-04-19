import React, { Dispatch, SetStateAction, useState } from 'react'
import Button from '../Button'
import style from './form.module.css'
import { iTarefa } from '../../types/tarefa';
import { v4 as uuidv4 } from 'uuid'

export default function Form({setTarefas, tarefas}: {setTarefas: any, tarefas: iTarefa[]}) {

  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState('00:00:00')

  const adicionarTarefa = (evento: React.FormEvent) => {
    evento.preventDefault();
    const novaTarefa: iTarefa = {
      tarefa: `${tarefa}`,
      tempo: `${tempo}`,
      selecionado: false,
      completado: false,
      id: uuidv4() 
    }  
    //setTarefas([...tarefas, {...novaTarefa }])
    setTarefas((tarefasAntigas: iTarefa[]) => 
          [
            ...tarefasAntigas, 
            {
              ...novaTarefa
            }
          ]
          )

    setTarefa('')
    setTempo('00:00')
  }


  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa"></label>
            <input 
            type="text" 
            name="tarefa" 
            value={tarefa}
            onChange={evento => setTarefa(evento.target.value)}
            id="tarefa" 
            placeholder="O que você quer estudar?" 
            required />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo"></label>
            <input type="time" 
            name="tempo" 
            id="tempo" 
            value={tempo}
            onChange={evento => setTempo(evento.target.value)}
            min="00:00:00" 
            // max=":30:00" 
            required />
        </div>
        <Button texto="Adicionar"></Button>
    </form>
  )
}
