import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../reducers/auth'; // Import your register action
import './RegistrationForm.css'; // Import your CSS file

function RegistrationForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = () => {
        // Validate email
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email address');
            return;
        }

        // Register user
        const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
        const userExists = usersData.some(user => user.username === username || user.email === email);
        if (userExists) {
            setError('User already exists');
            return;
        }

        const user = { firstName, lastName, username, email, password };
        usersData.push(user);
        localStorage.setItem('usersData', JSON.stringify(usersData));

        // If registration is successful, navigate to the login page
        dispatch(register(firstName)); // Dispatch the register action with the user's first name
        navigate('/login'); // Navigate to the login page after successful registration
    };

    return (
        <div className="registration-form">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="show-password-button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide Password" : "Show Password"}
            </button>
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default RegistrationForm;
