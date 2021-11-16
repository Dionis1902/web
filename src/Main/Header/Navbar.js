import React from "react";
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <i className="fas fa-paw mr-1"/>
                    PetShop
            </a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink exact to="/catalog"  className="nav-link">Catalog</NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink exact to="/cart" className="nav-link">Cart</NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2">
                        <button className="btn btn-outline-secondary" type="button">Log in</button>
                    </li>
                    <li className="nav-item">
                       <button className="btn btn-primary" type="button">Register</button>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;