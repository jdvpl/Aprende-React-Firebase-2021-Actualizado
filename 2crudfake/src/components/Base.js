import React,{useEffect,useState} from 'react'

const Base = () => {
    const [nombre, setnombre] = useState("Juan Daniel")
    useEffect(() => {
        setTimeout(() => {
            setnombre("jiren")
        }, 2000);
    }, [])
    return (
        <div className="container">
            <h2>BASE</h2>
            {nombre}
        </div>
    )
}

export default Base
