import './App.css';
import Propiedades from './componentes/Propiedades';
import { LogoFree } from './componentes/freecodecampLogo';

function App() {

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <LogoFree />
          <div className='h1style'>
            <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          </div>
          <Propiedades />
      </div>
    </div>
  );
}

export default App;
