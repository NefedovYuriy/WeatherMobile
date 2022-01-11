import React from 'react';
import { Link } from 'react-router-dom';

import "./Navbar.scss";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar__button navbar__button-home">
                <i className="fa fa-home fa-lg" aria-hidden="true" />
            </Link>
            <Link to="/menu" className="navbar__button navbar__button-menu">
                <i className="fa fa-bars fa-lg" aria-hidden="true" />
            </Link>
            <Link to="/info" className="navbar__button navbar__button-info">
                <i className="fa fa-info-circle fa-lg" aria-hidden="true" />
            </Link>
        </div>
    )
}