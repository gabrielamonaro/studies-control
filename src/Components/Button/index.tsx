import { prototype } from 'events'
import React from 'react'
import style from './button.module.css'

export default function Button(
  props: 
  {
    texto: String, 
    aoClique?: ()=> void
  }
  ) {
  return (
    <button 
      className={style.botao} 
      onClick={props.aoClique}> 
          {props.texto} 
    </button>
  )
}
