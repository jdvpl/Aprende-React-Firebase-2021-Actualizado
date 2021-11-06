import './App.css';

// rutas
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Inicio from './components/Inicio';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Inicio/></Route>
      </Switch>
    </Router>
   
  );
}

export default App;
