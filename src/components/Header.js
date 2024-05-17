import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { logout } from '../reducers/auth'; // Import your logout action
import './Header.css';

function Header() {
  const userName = useSelector((state) => state.auth.userName); // Get the user's name from the state
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <header className="header">
        <h1>Awesome Store</h1>
        <nav>
          <ul>
            <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>Store</NavLink></li>
            {userName ? (
              <li><button onClick={handleLogout}>Logout</button></li> // Show Logout button if user is logged in
            ) : (
              <>
                <li><NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink></li>
                <li><NavLink to="/register" className={({ isActive }) => isActive ? 'active' : ''}>Sign Up</NavLink></li>
              </>
            )}
            <li><NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}><FontAwesomeIcon icon={faShoppingCart} /></NavLink></li>
          </ul>
        </nav>
      </header>
      {userName && <div className="user-header">Welcome, {userName}!</div>} {/* Display the user's name if they are logged in */}
    </>
  );
}

export default Header;
