import React,{useState} from 'react'

const Formulario = () => {
  const [nombre, setnombre] = useState('');
  const [edad, setedad] = useState('')
  const [error, seterror] = useState(false);

  const validation = (event) => {
    event.preventDefault();

    if(!edad.trim() || !nombre.trim()){
      seterror(true);
      return;
    }
    }

  return (
    <div className="container mt-5">
    {error ? <div className="alert alert-danger">Los campos no pueden estar vacios</div> : null}
      <form className="form-group" onSubmit={validation}>
        <input type="text" name="" id="" className="form-control mb-3" placeholder="Nombre" onChange={(e) =>{setnombre(e.target.value)}}/>
        <input type="text" name="" id="" className="form-control mb-3" placeholder="Edad" onChange={(e) =>{setedad(e.target.value)}}/>
        <input type="submit" name="" id="" className="form-control" className="btn btn-primary" />
      </form>
    </div>
  )
}

export default Formulario
