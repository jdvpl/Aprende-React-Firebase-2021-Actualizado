import React,{useState, useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom'
const Usuario = () => {
    const [user, setuser] = useState([]);
    const {id}=useParams();
    const obtenerUsuarios=async()=>{
        const res=await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data=await res.data;
        setuser(data);
    }
    useEffect(() => {
        obtenerUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    console.log(user)
    const {name, username,email}=user;
    return (
        <div>
            <h4>Usuario {id}</h4>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
        </div>
    )
}

export default Usuario
