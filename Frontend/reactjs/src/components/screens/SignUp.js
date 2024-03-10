import { useNavigate } from 'react-router-dom';
import SignUpNavbar from '../SignUpNavbar';
import React,{ useState } from "react";


const SignUp = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [role, setRole] = useState(''); // 'teacher' or 'student'
    const [error, setError] = useState(null);
    const navigate = useNavigate();

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

        try {
            const response = await fetch('http://localhost:4000/api/createUser', {
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
            setName('');
            setRole('');
            
            // Handle successful response from the server
            console.log('Sign-up successful');
            
            navigate('/login');
        } catch (error) {
            // Handle network errors or server-side errors
            setError(error.message);
        }
    };

    return (
        <>
            <SignUpNavbar/>
            This is the signin page
        <div className="d-flex flex-column align-items-center w-100">
            <h2>SIGN IN</h2>
            <div className="d-flex flex-column align-items-center border border-primary border-opacity-25 rounded d-flex p-3 w-50">
            <form onSubmit={handleSubmit}>
                <div className="form-group m-3">
                    <label className="font-monospace">EMAIL:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group m-3">
                    <label className="font-monospace">NAME:</label>
                    <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required/>
                </div>
                <div className="form-group m-3">
                    <label className="font-monospace">PASSWORD:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                </div>



                <div className="form-group m-3">
                    <label className="font-monospace">Role:</label>
                    <div className="d-flex flex-row">
                        <div className="form-check m-3">
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
                        <div className="form-check m-3">
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


                <button type="submit" className="btn btn-primary m-3">Submit</button>
            </form>
            </div>
        </div>
        </>
    );
}


export default SignUp;