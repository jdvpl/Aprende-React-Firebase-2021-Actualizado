import './App.css';

// rutas
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/Inicio';
import Base from './components/Base';
import Header from './components/Header';
import Usuarios from './components/Usuarios';
import Usuario from './components/Usuario';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Inicio/></Route>
        <Route exact path="/base"><Base/></Route>
        <Route exact path="/usuarios"><Usuarios/></Route>
        <Route exact path="/usuario/:id"><Usuario/></Route>  
      </Switch>
    </Router>
   
  );
}

export default App;
