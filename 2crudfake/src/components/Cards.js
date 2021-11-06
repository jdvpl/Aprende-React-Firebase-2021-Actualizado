import React from 'react'

const Cards = (props) => {
    const {imagen,titulo,texto}=props;
    return (
        <div className="card col-md-4" >
            <img src={imagen} className="card-img-top img-fluid img-thumbnail" alt={titulo} />
            <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{texto}</p>
            <a href="#" className="btn btn-primary">Ver mas</a>
            </div>
        </div>
    )
}

export default Cards
