import React from "react";

export default ({height = "500px"}) => {
    return (

        <div className="d-flex justify-content-center align-items-center" style={{height: height}}>
            <div className="spinner-border m-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}