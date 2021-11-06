import React,{useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre,setnombre]=useState("");
    const [listanombres, setlistanombres] = useState([]);
    const [error, seterror] = useState(false);

    const addName=(e)=>{
        e.preventDefault();

        if(!nombre.trim()){
            seterror(true);
            return;
        }else{
            seterror(false);

        }
        const nuevoNombre={
            id:uniqid(),
            data:nombre
        }
        setlistanombres([...listanombres,nuevoNombre])
        setnombre("")
    }

    const deleteName=(id)=>{
        const newArray=listanombres.filter(item=>item.id !== id)
        setlistanombres(newArray)
    }


    return (
        <div>
            <h2>Aplicacion CRUD BASICA</h2>
            <div className="row">
                <div className="col-md-6">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {listanombres.map(item=>
                            <li key={item.id} className="list-group-item">{item.data}
                            <button className="btn btn-danger float-end" onClick={()=>deleteName(item.id)}>Eliminar</button>
                            </li>)}
                    </ul>
                </div>
                <div className="col-md-6">
                    <h2>Formulario</h2>
                    {error ? <div className="alert alert-danger">Por favor colocar un nombre</div>:null}
                    <form className="form-group" onSubmit={(e)=>addName(e)}>
                        <input type="text" name="" id="" value={nombre} placeholder="Nombre" className="form-control mb-3" onChange={(e)=>{setnombre(e.target.value)}}/>
                        <input type="submit" value="Registrar" className="btn btn-outline-success btn-block" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listadonombres
