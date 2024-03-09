import Navbar from "../Navbar";
import React,{ useState } from "react";




const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //Signifies that the user is not logged in , so displays the contents of the page accordingly
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a JSON object with the form data
        const requestBody = {
            email: email,
            password: password,
        };

        console.log(requestBody);

        try {
            const response = await fetch('http://localhost:4000/api/loginUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                // Handle error response from the server
                const errorMessage = await response.text();
                throw new Error(errorMessage);
            }

            // Clear form fields on successful sign-up
            setEmail('');
            setPassword('');

            // Handle successful response from the server
            console.log('Login successful');
        } catch (error) {
            // Handle network errors or server-side errors
            setError(error.message);
        }
    };



    return (
        <>
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
        <div>
            This is the Login page
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

    
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>


                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
}

export default Login;