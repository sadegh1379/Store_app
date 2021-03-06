import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                <Link className="navbar-brand" to="/"><span className="fa  fa-mobile fa-2x"></span></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><span className="fa fa-home mr-1"></span>Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart"><span className="fa fa-shopping-basket mr-1"></span>Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://sadeghakbari.gigfa.com">About Me</a>
                            </li>
                    </ul>
                    {/* <form class="form-inline float-left my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
                </nav>
        </div>
    )
}

export default Navbar;
