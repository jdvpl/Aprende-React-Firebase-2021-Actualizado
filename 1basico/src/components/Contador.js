import React,{Fragment, useState} from 'react'

export const Contador = () => {
  const [numero, setnumero] = useState(0);

  const aumentar=()=>{
    setnumero(numero+1)
  }
  const disminuir=()=>{
    setnumero(numero-1)
  }

  return (
    <Fragment>
      <h2>Contador {numero}</h2>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Dismunuir</button>
    </Fragment>
  )
}
