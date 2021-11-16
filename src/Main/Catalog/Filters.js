import React from "react";

function Filters() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-center">
            <form className="form-inline">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mr-sm-2">
                        <select className="form-control" name="sort" id="sort">
                            <option value="" disabled selected>Sort</option>
                            <option value="asc" >ASC</option>
                            <option value="desc" >DESC</option>
                        </select>
                    </li>
                    <li className="nav-item active mr-sm-2">
                        <select className="form-control " name="animal" id="animal">
                            <option value="" disabled selected>Animal</option>
                            <option value="dog" >Dog</option>
                            <option value="cat" >Cat</option>
                            <option value="parrot" >Parrot</option>
                            <option value="turtle" >Turtle</option>
                        </select>
                    </li>
                    <li className="nav-item active">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" name="search" id="search" aria-label="Search"/>
                    </li>
                    <li>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </li>
                </ul>
            </form>
        </nav>
    );
}

export default Filters;