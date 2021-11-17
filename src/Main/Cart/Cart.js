import React, {useContext} from "react";
import CatalogItem from "./CatalogItem";
import {useDispatch} from "react-redux";
import Context from "../context";
import {setItemCount} from "../Reducers/Cart";

function Cart({cart}) {
    const dispatch = useDispatch();
    const {setCounter, getData} = useContext(Context);

    function setAnimalsCont(){
        setCounter(Object.values(cart).reduce((partial_sum, a) => partial_sum + a, 0))
    }

    function getSubtotal(){
        return Object.keys(cart).map((id) =>getData(id).price*cart[id]).reduce((partial_sum, a) => partial_sum + a, 0)
    }

    if (Object.keys(cart).length === 0)
        return (
            <div className="d-flex flex-column justify-content-center text-center"
                 style={{marginTop: "200px", marginBottom: "200px"}}>
                <h1>Cart is empty</h1>

            </div>)
    return (
        <div className="row  justify-content-center align-self-center">
            <div className="col-11 mt-5 ">
                <table className="table">
                    <thead>
                    <tr>
                        <th style={{width: "30%", verticalAlign: "inherit"}} scope="col">Animal Name</th>
                        <th className="text-center" style={{width: "15%", verticalAlign: "inherit"}} scope="col">Animal Type</th>
                        <th className="text-center" style={{width: "15%", verticalAlign: "inherit"}} scope="col">Quantity</th>
                        <th className="text-center" style={{width: "15%", verticalAlign: "inherit"}} scope="col">Price</th>
                        <th className="text-center" style={{width: "15%", verticalAlign: "inherit"}} scope="col">Subtotal</th>
                        <th className="text-center" style={{width: "10%", verticalAlign: "inherit"}} scope="col">
                            <button type="button" onClick={()=>{
                                Object.keys(cart).map((id)=>dispatch(setItemCount(id, 0)))
                                setAnimalsCont()
                            }} className="btn btn-outline-danger">Clear Cart</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        Object.keys(cart).map((id) => <CatalogItem id={id} dispatch={dispatch} count={cart[id]} key={id} setAnimalsCont={setAnimalsCont}/> )
                    }
                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <th style={{verticalAlign: "inherit"}} className="text-center">{getSubtotal().toFixed(2)} $</th>
                        <td style={{verticalAlign: "inherit"}} className="text-center"><button type="button" className="btn btn-primary">Checkout</button></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Cart;