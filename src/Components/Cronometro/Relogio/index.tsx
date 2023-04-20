import React from 'react'
import style from './relogio.module.css'


interface Props{
  tempo: number | undefined
}

export default function Relogio({tempo = 0 } : Props) {
  const minutos = Math.floor(tempo/60) //arredonda pra baixo quando o número é quebrado
  const segundos = tempo%60

   // .padStart(numero min de caracteres, qual caractere vai entrar no 'vazio') 

  const [minutoDezena, minutoUnidade]  = String(minutos).padStart(2,'0') 
  const [segundoDezena, segundoUnidade]  = String(segundos).padStart(2,'0') 

  return (
    <>
        <span className={style.relogioNumero}>{minutoDezena}</span>
        <span className={style.relogioNumero}>{minutoUnidade}</span>
        <span className={style.relogioNumero}>:</span>
        <span className={style.relogioNumero}>{segundoDezena}</span>
        <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>

  )
}
