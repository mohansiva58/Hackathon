import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Import the CSS file
//import logo from './forgot.png'; // Corrected import path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef(null); // Create a ref for the email input

  const handleLogin = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:5000/login', { // Use your backend server's URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Login successful:', data);
        // Handle successful login, e.g., navigate to another page or store token
      })
      .catch((error) => {
        console.error('Login error:', error);
      });
  };

  const handleBookRide = () => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
    console.log('Book Your Ride button clicked');
  };

  return (
   
   
      <div className="login-page">
       
      
      <div className="ride-on-container">
        <button className="ride-on-btn" onClick={handleBookRide}>Book Your Ride</button>
      </div>
      
        <div className="login-container">
          <div className="login-form">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="86" fill="currentColor" className="bi bi-person-fill-lock" viewBox="0 0 16 16">
              <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h5v-1a2 2 0 0 1 .01-.2 4.49 4.49 0 0 1 1.534-3.693Q8.844 9.002 8 9c-5 0-6 3-6 4m7 0a1 1 0 0 1 1-1v-1a2 2 0 1 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
            </svg>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  ref={emailRef} // Attach the ref to the email input
                />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="login-btn">Log In</button>
            </form>
            <p className="login-footer">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
            <div className="forgot-password">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default Login;
