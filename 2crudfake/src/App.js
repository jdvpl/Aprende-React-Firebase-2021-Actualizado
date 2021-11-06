import './App.css';
import Cards from './components/Cards';
import Listadonombres from './components/Listadonombres';

function App() {
  return (
    <div className="container">
      <Listadonombres/>

    <div className="row">

    
      <Cards
        imagen="https://placeimg.com/640/480/any?t=1636225872174"
        titulo="imagen de kisama"
        texto="lorem"
      />
      <Cards
        imagen="https://placeimg.com/640/480/any?t=1636226104462"
        titulo="Mamasota rica"
        texto="nena de ojos azules bella"
      />
      <Cards
        imagen="https://placeimg.com/640/480/any?t=1636226084979"
        titulo="imagen de kisama"
        texto="lorem"
      />
      <Cards
        imagen="https://placeimg.com/640/480/any?t=1636226017504"
        titulo="imagen de aslkdfj lkasdklfh alsdfh alsdhl asdjf lasdlfkj asldfj"
        texto="lorem"
      />
      </div>
    </div>
  );
}

export default App;
