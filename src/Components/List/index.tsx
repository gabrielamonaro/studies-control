import React, { useState } from 'react';
import Item from './Item';
import style from './list.module.css'
import { iTarefa } from '../../types/tarefa';

export default function List(
    {
        tarefas, 
        selecionaTarefa
    }: 
    {
        tarefas: iTarefa[], 
        selecionaTarefa: (tarefaSelecionada: iTarefa) => void 
    }
    ) {


  return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia</h2>
            <ul>

                {tarefas.map((tarefa, index) =>  
                    (
                        <Item     
                            key={tarefa.id} 
                            {...tarefa} 
                            selecionaTarefa={selecionaTarefa}
                        /> 
                    ) 
                )}        

            </ul>
        </aside>
  )
}
