import React from 'react';
import { Link } from 'react-router-dom'; 

const SignUpNavbar = ({ isLoggedIn }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-sucess">
                <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className='navbar-nav'>
                          <li className='nav-item>'>
                            <Link className='nav-link' to="/signup">Sign In</Link>
                          </li>
                          <li className='nav-item>'>
                            <Link className='nav-link' to="/login">Login</Link>
                          </li>
                        </ul> 
                  </div> 
            </nav>
        </>
    );
}

export default SignUpNavbar;
