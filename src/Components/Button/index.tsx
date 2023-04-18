import React from 'react'
import style from './button.module.css'

export default function Button(props: {texto: String}) {
  return (
    <button className={style.botao}> {props.texto} </button>
  )
}
