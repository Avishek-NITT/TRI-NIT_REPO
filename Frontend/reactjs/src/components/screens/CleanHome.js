import Navbar from "../Navbar";
import { useState } from "react";

const CleanHome = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //Signifies that the user is not logged in , so displays the contents of the page accordingly
    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
            This is the home page when no user is signed in.  
        </>
    );
}


export default CleanHome;