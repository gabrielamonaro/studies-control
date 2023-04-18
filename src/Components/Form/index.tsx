import React from 'react'
import Button from '../Button'
import style from './form.module.css'

export default function Form() {
  return (
    <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
            <label htmlFor="tarefa"></label>
            <input 
            type="text" 
            name="tarefa" 
            id="tarefa" 
            placeholder="O que você quer estudar?" 
            required />
        </div>
        <div className={style.inputContainer}>
            <label htmlFor="tempo"></label>
            <input type="time" 
            name="tempo" 
            id="tempo" 
            min="00:00:00" 
            max="01:30:00" 
            required />
        </div>
        <Button texto="Adicionar"></Button>
    </form>
  )
}
