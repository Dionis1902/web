import React from "react";

function Item({element}){
    return (
        <div className="col-4 d-flex flex-column text-center">
            <img className="rounded img-responsive align-top" src={`/img/${element.img}.jpeg`}/>
            <h3>{element.title}</h3>
            <p>{element.text}</p>
        </div>
    );
}

export default Item;