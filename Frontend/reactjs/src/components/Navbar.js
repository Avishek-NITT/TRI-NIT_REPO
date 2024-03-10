import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = ({ isLoggedIn }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-sucess">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">COMMERECE PAGE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/courses">Courses</Link>
                        </li>
                    </ul>
                </div>
                
            </nav>
        </>
    );
}

export default Navbar;
