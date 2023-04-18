import React from 'react'
import Button from '../Button'
import Relogio from './Relogio'
import style from './cronometro.module.css'

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio></Relogio>
        </div>
        <Button texto="Começar"></Button>
    </div>

  )
}
