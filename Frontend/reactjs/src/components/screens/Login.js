import SignUpNavbar from '../SignUpNavbar';
import React,{ useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a JSON object with the form data
        const requestBody = {
            email: email,
            password: password,
        };

        console.log(requestBody);


        const authToken = localStorage.getItem("authToken");

        if(authToken !== undefined){
            console.log("Already logged in!!");
        }else{
            
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
                
    
                // Clear form fields on successful login
                setEmail('');
                setPassword('');
    
                // Save auth token in local storage
                console.log('Login successful');
                const json = await response.json();
                
                localStorage.setItem("authToken", json.authToken);
                console.log(localStorage.getItem("authToken"));
                
                
                //!!!!!!!!!!!!!!!!!Navigate back to home page
                
            } catch (error) {
                // Handle network errors or server-side errors
                setError(error.message);
            }
        }
        //SET JWT logic here
        navigate('/');

    };

    if(localStorage.getItem("authToken") != undefined){
        console.log("Already logged in!!");
        
    }

    return (
        <>
        <SignUpNavbar/>

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