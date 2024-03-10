import Navbar from "../Navbar";
import { useState } from "react";
import { useLocation } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Navbar/>
            <div>
                This is the home page.  
            </div>
        </>
    );
}


export default Home;