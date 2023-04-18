import React from 'react'
import style from './item.module.css'

export default function Item({tarefa, tempo}: {tarefa: String, tempo: String}) {
  return (
    <li className={style.item}>
    <h3> {tarefa} </h3>
    <span> {tempo} </span>
    </li>   
  )
}
