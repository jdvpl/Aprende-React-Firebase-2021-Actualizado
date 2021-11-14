import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Usuario = () => {
    const [users, setusers] = useState([]);
    const obtenerUsuarios=async()=>{
        const res=await axios.get("https://jsonplaceholder.typicode.com/users");
        const data=await res.data;
        setusers(data);
    }
    useEffect(() => {
        obtenerUsuarios();
    }, [])

    return (
        <div>
            <h2>Lista de usuarios</h2>
            {
                users.map( (item) => (
                    <ul  className="list-group">
                        <Link to={`/usuario/${item.id}`} className="list-group-item" key={item.id}>{item.name}</Link>
                    </ul>
                ))
            }
        </div>
    )
}

export default Usuario
