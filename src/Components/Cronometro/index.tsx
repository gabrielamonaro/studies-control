import React, { useEffect, useState } from 'react'
import Button from '../Button'
import Relogio from './Relogio'
import style from './cronometro.module.css'
import { tempoParaSegundos } from '../../common/utils/time'
import { iTarefa } from '../../types/tarefa'

interface Props{
  finalizarTarefa: () => void
  selecionado: iTarefa | undefined //undefined é o valor no primeiro momento quando não se tem nenhuma tarefa
}

export default function Cronometro({selecionado, finalizarTarefa}: Props) 
{

  const [tempo, setTempo] = useState<number>() //é number o valor inserido dentro de tempo

  useEffect(() => {
    
    if(selecionado?.tempo)
    {
      setTempo(tempoParaSegundos(selecionado.tempo))
    }

  }, [selecionado]) //sempre que o selecionado mudar, a função do primeiro é executada
  

  function regressiva(contador: number = 0)
  {
    setTimeout(() => {
      if (contador > 0 )
      {
        setTempo(contador - 1)
        return regressiva(contador -1)
      }
      else{
        finalizarTarefa()
      }
    }, 1000)
  }

  return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}></Relogio>
        </div>
        <Button texto="Começar" aoClique={ ()=> regressiva(tempo)}></Button>
    </div>

  )
}
