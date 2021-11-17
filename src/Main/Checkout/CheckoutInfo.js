import React from "react";

function CheckoutInfo({title, type, price}) {
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{title}</h6>
                <small className="text-muted">{type}</small>
            </div>
            <span className="text-muted">{price.toFixed(2)} $</span>
        </li>
    );
}

export default CheckoutInfo;