import React from 'react'
import Button from '../Button'

export default function Form() {
  return (
    <form>
        <div>
            <label htmlFor="tarefa"></label>
            <input 
            type="text" 
            name="tarefa" 
            id="tarefa" 
            placeholder="O que você quer estudar?" 
            required />
        </div>
        <div>
            <label htmlFor="tempo"></label>
            <input 
            type="time" 
            name="tempo" 
            id="tempo" 
            min="00:00:00" 
            max="01:30:00" 
            required />
        </div>
        <Button></Button>
    </form>
  )
}
