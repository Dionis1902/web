import React from "react";

function Success({email}) {
    return (
        <div className="container text-center">
            <i className="far fa-check-circle" style={{fontSize: "80px", color: "#28a745"}}/>
            <h1 class="mt-4">Thank you!</h1>
            <h5 >Your order will arrive to you shortly</h5>
            <h7>We have sent you a check and more information by e-mail <b>{email}</b></h7>
            <br/>
            <a type="button" href="/catalog" className="btn btn-primary mt-5">Back to shop</a>
        </div>
    )
}

export default Success;