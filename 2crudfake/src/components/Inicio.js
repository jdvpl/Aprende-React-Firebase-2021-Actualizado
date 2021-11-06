import React from 'react'
import Listadonombres from './Listadonombres';
import Cards from './Cards';
const Inicio = () => {
    return (
        <div>
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
        </div>
    )
}

export default Inicio
