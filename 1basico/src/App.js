import './App.css';
import { Contador } from './components/Contador';
import Formulario from './components/Formulario';
import { Listado } from './components/Listado';
import Ternario from './components/Ternario';

function App() {
  return (
    <div className="App">
      <Contador/>
      <Listado/>
      <Ternario />
      <Formulario />
    </div>
  );
}

export default App;
