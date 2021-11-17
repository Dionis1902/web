import React, {useContext, useState} from "react";
import Context from "../context";
import {setItemCount} from "../Reducers/Cart";

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function CatalogItem({id, dispatch, count, setAnimalsCont}) {
    const {getData} = useContext(Context);
    const element = getData(id);
    const [endPrice, setEndPrice] = useState(element.price * count)

    function changeCount(e){
        setEndPrice(element.price * parseInt(e.target.value))
        dispatch(setItemCount(id, parseInt(e.target.value)))
        setAnimalsCont()

    }

    return (
        <tr>
            <td style={{verticalAlign: "inherit"}}>{element.title}</td>
            <td style={{verticalAlign: "inherit"}} className="text-center">{element.type.capitalize()}</td>
            <td style={{verticalAlign: "inherit"}} className="text-center"><input style={{textAlign: "center"}} type="number" min="0" max="99" defaultValue={count} onChange={(e)=> changeCount(e)} className="form-control" />
            </td>
            <td style={{verticalAlign: "inherit"}} className="text-center">{element.price.toFixed(2)} $</td>
            <td style={{verticalAlign: "inherit"}} className="text-center">{(endPrice).toFixed(2)} $</td>
            <td style={{verticalAlign: "inherit"}} className="text-center"><button onClick={() => {
                dispatch(setItemCount(id, 0))
                setAnimalsCont()
            }} type="button" className="btn"><i style={{color:"#dc3545"}} className="fas fa-trash"/></button></td>
        </tr>
    );
}

export default CatalogItem;