import React from "react";

function Error({text}) {
    return (
            <div className="alert alert-danger mb-3">
                <strong>Error!</strong> {text}
            </div>
    )
}

function Success({text}){
    return (
        <div className="alert alert-success mb-3">
                <strong>Success!</strong> {text}
            </div>
    )
}

export {Error, Success};
