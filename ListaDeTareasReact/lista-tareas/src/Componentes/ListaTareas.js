import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario.js'
import '../Hojas-de-estilo/listadetareas.css'
import Tarea from './Task.js';;

export default function ListaTareas() {
  
  const [tareas, setTareas] = useState([]); //hook
 
  const agregarTarea = tarea => { /// funcion
    if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();  
        const tareasActualizadas = [tarea, ...tareas] // se crea un arreglo nuevo con los datos anteriores de la constante tareas  y agregue la nueva tarea
        setTareas(tareasActualizadas);
    }
  }; // al final de la definicion de una funcion flecha se agrega ;

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); // se crea un nuevo arreglo solo con las tareas que tengan id distinto del que se digito
    setTareas(tareasActualizadas); // se actualiza tareas con la nueva info
  };

  const completarTarea = id =>{
    const tareasActualizadas = tareas.map( tarea => {
      if(tarea.id === id) //si el id de la tarea en la que estamos es igual al id de la tarea que se quiere marcar como completada
        {
          tarea.completada = !tarea.completada; // invierte su estado
        }
        return tarea;
    });
    setTareas(tareasActualizadas)
  };

  return (
    <>
      <TareaFormulario onSubmit={agregarTarea}/> 
      
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id ={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} 
           />
              

            
          ) 
        }
      </div>
      </>
  )
}