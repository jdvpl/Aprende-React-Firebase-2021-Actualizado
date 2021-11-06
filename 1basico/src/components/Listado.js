import React,{Fragment, useState} from 'react'

export const Listado = () => {
  const [numeros, setnumeros] = useState([1,2,3,4,5,7,6,7,2,45,5]);
  return (
    <Fragment>
      <ul>
        { numeros.map((item,index)=><li key={index}>{item}</li>)}
      </ul>
    </Fragment>
  )
}
