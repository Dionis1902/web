import React from "react";

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
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Catalog</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cart</a>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-2">
                        <a className="btn btn-outline-secondary" href="#" role="button" >Log in</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-primary" href="#" role="button" >Register</a>
                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;