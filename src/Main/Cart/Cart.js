import React, {useContext} from "react";
import CatalogItem from "./CatalogItem";
import {useDispatch} from "react-redux";
import Context from "../context";
import {setItemCount} from "../Reducers/Cart";
import Modal from "../Checkout/Modal";
import NoFound from "../NoFound";

function Cart({cart}) {
    const dispatch = useDispatch();
    const {setCounter, getData} = useContext(Context);

    function setAnimalsCont() {
        setCounter(Object.values(cart).reduce((partial_sum, a) => partial_sum + a, 0))
    }

    function getTH(text, width){
        return <th className="text-center" style={{width: width, verticalAlign: "inherit"}} scope="col">{text}</th>
    }


    function getSubtotal() {
        return Object.keys(cart).map((id) => getData(id).price * cart[id]).reduce((partial_sum, a) => partial_sum + a, 0)
    }

    if (Object.keys(cart).length === 0)
        return <NoFound error={'*-*'} text={"Cart is empty."}/>
    return (
        <div>
            <Modal />
            <div className="row  justify-content-center align-self-center">
                <div className="col-11 mt-5 ">
                    <table className="table">
                        <thead>
                        <tr>
                            <th style={{width: "30%", verticalAlign: "inherit"}} scope="col">Animal Name</th>
                            {getTH("Animal Type", "15%")}
                            {getTH("Quantity", "15%")}
                            {getTH("Price", "15%")}
                            {getTH("Subtotal", "15%")}
                            <th className="text-center" style={{width: "10%", verticalAlign: "inherit"}} scope="col">
                                <button type="button" onClick={() => {
                                    Object.keys(cart).map((id) => dispatch(setItemCount(id, 0)))
                                    setAnimalsCont()
                                }} className="btn btn-outline-danger">Clear Cart
                                </button>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            Object.keys(cart).map((id) => <CatalogItem id={id} dispatch={dispatch} count={cart[id]}
                                                                       key={id} setAnimalsCont={setAnimalsCont}/>)
                        }
                        <tr>
                            <td/> <td/> <td/> <td/>
                            <th style={{verticalAlign: "inherit"}}
                                className="text-center">{getSubtotal().toFixed(2)} $
                            </th>
                            <td style={{verticalAlign: "inherit"}} className="text-center">
                                <button type="button" className="btn btn-primary" data-toggle="modal"
                                        data-target="#checkoutModal">Checkout
                                </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;