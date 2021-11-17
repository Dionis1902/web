import React, {useContext} from "react";
import {useParams} from "react-router-dom";
import Context from "../context";
import {useDispatch} from "react-redux";
import {addItemToCart} from "../Reducers/Cart";
function ItemPage() {
    let {id} = useParams();
    const {getData, counter, setCounter} = useContext(Context);
    const element = getData(id);
    const dispatch = useDispatch();
    if (!element) {
        return (
            <div className="d-flex flex-column justify-content-center text-center"
                 style={{marginTop: "200px", marginBottom: "200px"}}>
                <h1>404 - Animal don't founded</h1>

            </div>)
    }
    return (

        <div className="row mt-5 justify-content-center">
            <div className="col-6 d-flex flex-column justify-content-center text-center">
                <img src={`/img/${element.img}.jpeg`} className="rounded img-responsive"/>
            </div>
            <div className="col-5 d-flex flex-column">
                <h2>{element.title}</h2>
                <p className="font-weight-normal mt-5">{element.text}</p>
                <div className="mt-auto">
                    <a type="button" href="/catalog" className="btn btn-outline-secondary mr-2">Back to Catalog</a>
                    <button type="button" onClick={() => {
                        dispatch(addItemToCart(id));
                        setCounter(counter+1);
                    }} className="btn btn-outline-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default ItemPage;