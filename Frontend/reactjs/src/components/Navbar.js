import React from "react";
import {Link} from 'react-router-dom'



//The login and signin button should come only when user is not signed in
//Otherwise it should show their profile




function Navbar(){
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
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
  </div>
</nav>
        </>
    );
}


export default Navbar;