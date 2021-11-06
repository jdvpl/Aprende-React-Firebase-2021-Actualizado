import './App.css';
import { Contador } from './components/Contador';
import { Listado } from './components/Listado';
import Ternario from './components/Ternario';

function App() {
  return (
    <div className="App">
      <Contador/>
      <Listado/>
      <Ternario />
    </div>
  );
}

export default App;
