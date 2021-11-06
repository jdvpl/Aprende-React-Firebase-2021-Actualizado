import './App.css';

// rutas
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Inicio from './components/Inicio';
import Base from './components/Base';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/"><Inicio/></Route>
        <Route exact path="/base"><Base/></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
