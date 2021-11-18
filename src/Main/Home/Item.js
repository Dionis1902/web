import React from "react";
import {NavLink} from "react-router-dom";

function Item({element, catalog=false}){
    return (
        <div className="col-4 d-flex flex-column text-center">
            <img className="rounded img-responsive" src={`/img/${element.img}.jpeg`} />
            <h3>{element.title}</h3>
            { catalog? <h5>{element.price} $</h5>: null }
            <p>{element.text}</p>
            { catalog? <NavLink type="button" to={`/catalog/${element.id}`} className="btn btn-outline-secondary mb-5 mt-auto">View more</NavLink> : null }
        </div>
    );
}

export default Item;