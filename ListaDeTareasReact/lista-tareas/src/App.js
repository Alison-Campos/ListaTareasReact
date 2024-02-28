import logo from './Imagenes/freecodecamp-logo.png';
import './App.css'; 
import ListaTareas from './Componentes/ListaTareas.js'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={logo} className="freecodecamp-logo" alt="logo"
        />
      </div>
      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
      <ListaTareas/>
      
     </div>
    </div>
  );
}

export default App;
