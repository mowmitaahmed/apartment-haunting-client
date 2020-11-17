import React from 'react';
import {Link} from "react-router-dom";
import Logo from '../../images/logos/Logo.png';
import '../../styles/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-sm navbar-primary bg-white navbar-inverse">
            <div className="container">
                <Link to="/" className="navbar-brand"><img className="logo" src={Logo} alt={Logo} /></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-3">
                        <li className="nav-item mx-1 active">
                            <a className="nav-link text-dark" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link text-dark" href="#">About</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link text-dark" href="#">Service</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link text-dark" href="#">Concerns</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link text-dark" href="#">Event</a>
                        </li>
                        <li className="nav-item mx-1">
                            <a className="nav-link text-dark" href="#">Contact</a>
                        </li>
                    </ul>
                    <button className="btn btn-primary radius-5 my-2 ml-3 m-sm-0 px-4" type="submit">Login</button>
                </div>
                </div>
        </nav>
    );
};

export default Navbar;