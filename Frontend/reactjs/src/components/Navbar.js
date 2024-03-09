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
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                
                {/* Check whether user is logged in or not */}
                {isLoggedIn ? (
                    <div>
                        This means user is logged in.        
                    </div>
                ) : (
                  <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className='navbar-nav'>
                          <li className='nav-item>'>
                            <Link className='nav-link' to="/signup">Sign In</Link>
                          </li>
                        </ul> 
                  </div> 
                )}
            </nav>
        </>
    );
}

export default Navbar;
