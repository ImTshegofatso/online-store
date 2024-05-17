import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../reducers/auth'; // Import your login action
import './LoginForm.css'; // Import your CSS file

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // New state
    const [error, setError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = () => {
        // Check if user is registered
        const usersData = JSON.parse(localStorage.getItem('usersData')) || [];
        const user = usersData.find(user => user.username === username && user.password === password);
        if (!user) {
            setError('Invalid username or password');
            return;
        }
    
        // If login is successful, dispatch the login action with the user's name and navigate to the store page
        dispatch(login(user.firstName)); // Dispatch the login action with the user's first name
        navigate('/products'); // Navigate to the store page after successful login
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type={showPassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="show-password-button" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide Password" : "Show Password"}
            </button>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default LoginForm;
