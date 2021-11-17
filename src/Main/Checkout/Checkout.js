import React, {useContext, useState} from "react";
import Form from "./Form";
import CheckoutInfo from "./CheckoutInfo";
import Context from "../context";
import {useSelector} from "react-redux";
import Success from "./Success";
import Loader from "../Loader";

function Checkout(){
    const {counter, getData} = useContext(Context);
    const cart = useSelector(state => state.cart)
    function getSubtotal() {
        return Object.keys(cart).map((id) => getData(id).price * cart[id]).reduce((partial_sum, a) => partial_sum + a, 0)
    }

    const [success, setSuccess] = useState('');

    if (success==="load")
        return (<Loader height={"200px"}/>)

    if (success)
        return (<Success email={success}/>)


    return (
        <div class="container">
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">{counter}</span>
                    </h4>
                    <ul className="list-group mb-3 sticky-top">
                        {
                            Object.keys(cart).map((id)=>{
                                let element = getData(id)
                                return <CheckoutInfo title={element.title} type={element.type} price={element.price * cart[id]}/>
                            })
                        }
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total</span>
                            <strong>{getSubtotal().toFixed(2)} $</strong>
                        </li>
                    </ul>
                </div>
                <div className="col-md-8 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                        <Form setSuccess={setSuccess}/>
                </div>
            </div>
        </div>
    );
}

export default Checkout;