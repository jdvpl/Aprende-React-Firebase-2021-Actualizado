import React,{ useState}from 'react'

const Ternario = () => {
  const [temp, settemp] = useState(19);

  const subir = () => {
    settemp(temp+1)
  }

  const bajar = () => {
    settemp(temp-1)
  }
  return (
    <div className="container">
      <h2>Tempetatura {temp}</h2>
      <p>{temp >21 ? "Hace calor" : "Hacer frio"}</p>
      <button onClick={subir} className="btn btn-success">Aumentar temp</button>
      <button onClick={bajar} className="btn btn-danger ms-5">Reducir temp</button>
    </div>
  )
}

export default Ternario;
