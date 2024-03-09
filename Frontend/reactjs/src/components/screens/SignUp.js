import Navbar from "../Navbar";
import React,{ useState } from "react";

const SignUp = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false); //Signifies that the user is not logged in , so displays the contents of the page accordingly
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState(''); // 'teacher' or 'student'
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create a JSON object with the form data
        const requestBody = {
            email: email,
            password: password,
            name: name,
            role: role
        };

        console.log(requestBody);

        // try {
        //     const response = await fetch('https://localhost:4000//createuser', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(requestBody)
        //     });

        //     if (!response.ok) {
        //         // Handle error response from the server
        //         const errorMessage = await response.text();
        //         throw new Error(errorMessage);
        //     }

        //     // Clear form fields on successful sign-up
        //     setEmail('');
        //     setPassword('');
        //     setName('');
        //     // setRole('');
            
        //     // Handle successful response from the server
        //     console.log('Sign-up successful');
        // } catch (error) {
        //     // Handle network errors or server-side errors
        //     setError(error.message);
        // }
    };

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn}></Navbar>
            This is the signin page
            <h2>Sign In</h2>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label >Name</label>
                    <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required/>
                </div>
                <div className="form-group">
                    <label >Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>



                <div className="form-group">
                    <label>Role:</label>
                    <div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="teacher"
                                className="form-check-input"
                                value="teacher"
                                checked={role === 'teacher'}
                                onChange={() => setRole('teacher')}
                                required
                            />
                            <label className="form-check-label" htmlFor="teacher">Teacher</label>
                        </div>
                        <div className="form-check">
                            <input
                                type="radio"
                                id="student"
                                className="form-check-input"
                                value="student"
                                checked={role === 'student'}
                                onChange={() => setRole('student')}
                                required
                            />
                            <label className="form-check-label" htmlFor="student">Student</label>
                        </div>
                    </div>

                    </div>


                <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}


export default SignUp;