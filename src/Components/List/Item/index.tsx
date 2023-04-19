import React from 'react'
import style from './item.module.css'
import { iTarefa } from '../../../types/tarefa'

interface Props extends iTarefa{
  selecionaTarefa: (tarefaSelecionada: iTarefa) => void
}


export default function Item({tarefa, tempo, selecionado, id, completado, selecionaTarefa}: Props) {
  return (
    <li 
      className={`${style.item} ${selecionado? style.itemSelecionado : ''}`} 
      onClick={()=> 
        selecionaTarefa(
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
    </li>   
  )
}
