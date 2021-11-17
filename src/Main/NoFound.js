import React from "react";

function NoFound({error, text}){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "500px"}}>
            <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">{error}</h1>
            <div className="inline-block align-middle">
                <h2 className="font-weight-normal lead">{text}</h2>
            </div>
        </div>
    );
}

export default NoFound;