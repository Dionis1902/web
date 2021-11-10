import React from "react";

function Item({element, catalog=false}){
    return (
        <div className="col-4 d-flex flex-column text-center">
            <img className="rounded img-responsive" src={`/img/${element.img}.jpeg`} />
            <h3>{element.title}</h3>
            { catalog? <h5>{element.price} $</h5>: null }
            <p>{element.text}</p>
            { catalog? <a type="button" href={`catalog/${element.id}`} className="btn btn-outline-secondary mb-5 mt-auto">View more</a> : null }
        </div>
    );
}

export default Item;