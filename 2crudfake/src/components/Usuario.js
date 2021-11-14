import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
const Usuario = () => {
    const [user, setuser] = useState([]);
    const obtenerUsuarios=async()=>{
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/`);
        const data=await res.data;
        setuser(data);
    }
    useEffect(() => {
        obtenerUsuarios();
    }, [])
    return (
        <div>
            <h4>Usuario</h4>
        </div>
    )
}

export default Usuario
