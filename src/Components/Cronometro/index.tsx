import React, { useState } from 'react'
import Button from '../Button'
import Relogio from './Relogio'
import style from './cronometro.module.css'
import { tempoParaSegundos } from '../../common/utils/time'
import { iTarefa } from '../../types/tarefa'

export default function Cronometro({selecionado}: {selecionado: iTarefa | undefined}) //undefined é o valor no primeiro momento quando não se tem nenhuma tarefa
{

  const [tempo, setTempo] = useState<number>() //é number o valor inserido dentro de tempo

  if(selecionado?.tempo)
  {
    setTempo(tempoParaSegundos(selecionado.tempo))
  }
  
  console.log('conversao:', tempoParaSegundos('01:01:00'))
  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        Tempo: {tempo}
        <div className={style.relogioWrapper}>
            <Relogio></Relogio>
        </div>
        <Button texto="Começar"></Button>
    </div>

  )
}
