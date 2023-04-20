import React from 'react'
import style from './item.module.css'
import { iTarefa } from '../../../types/tarefa'

interface Props extends iTarefa{
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}


export default function Item({tarefa, tempo, selecionado, id, completado, selecionaTarefa}: Props) {
  return (
    <li 
      className={
        `${style.item} 
         ${selecionado? style.itemSelecionado : ''} 
         ${completado? style.itemCompletado : false}`
        } 
      onClick={()=> 
        !completado && selecionaTarefa(
          {
            tarefa, 
            tempo, 
            id, 
            selecionado, 
            completado
          }
        )
        }>
    <h3> {tarefa} </h3>
    <span> {tempo} </span>

    {completado && <span className={style.concluido} aria-label="tarefa completada"> </span>}
    
    </li>   
  )
}
