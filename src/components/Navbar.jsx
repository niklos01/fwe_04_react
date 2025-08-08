import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ links }) => {
    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">FWE-Team 04</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <Link 
                                    className={`nav-link${location.pathname === link.path ? ' active' : ''}`}
                                    to={link.path}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;