import React, { useState } from 'react';
import Item from './Item';
import style from './list.module.css'

export default function List() {


    const [tarefas, setTarefas] = useState([
        {
            tarefa: "React",
            tempo: '02:00:00'
        },
        {
            tarefa: "JavaScript",
            tempo: "01:00:00"
        },
        {
        tarefa: "TypeScript",
        tempo: "03:00:00"
        }
    ])


  return (
        <aside className={style.listaTarefas}>
            <h2    
            
            onClick={() => 
                setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }])
                }>
                
                Estudos do dia</h2>
            <ul>

                {tarefas.map((tarefa, index) =>  
                    (
                        <Item 
                            {...tarefa}
                        /> 
                    ) 
                )}        

            </ul>
        </aside>
  )
}
