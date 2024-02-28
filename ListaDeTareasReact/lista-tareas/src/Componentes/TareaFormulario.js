import React, {useState} from 'react'
import  '../Hojas-de-estilo/tarea-formulario.css';
import { v4  as uuidv4} from 'uuid';

export default function TareaFormulario(props) {
  
    const [input, setInput] = useState('');
    
  const manejarCambio = e =>{ // recibe un evento que ocurre cuando se genera un cambio el texto en el input
        setInput(e.target.value); // obtiene el valor que escribe el usuario atraves del evento e y actualiza el estado del input
        
    }

    
    const manejarEnvio = e =>{ // evento de submit es decir evento de envio de formulario
        e.preventDefault(); // para que cuando se toque el boton no se recargue la pagina
    
        const tareaNueva = { // crea la tarea nueva 
        id: uuidv4(), // esto garantiza id unico
        texto:input,
        completada: false
    };
    //console.log(tareaNueva); para ver que se envia en consola 
    props.onSubmit(tareaNueva);
  };
    return (
    <form  className='tarea-formulario'
    onSubmit={manejarEnvio}>
        
        <input 
            className='tarea-input' 
            type='text' 
            placeholder='Escribe una tarea'
            name='texto' 
            onChange={manejarCambio}>
        </input>

        <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  )
}
