import React, { useState } from 'react';
import './forgot.css';
import EnterCode from './EnterCode'; // Import EnterCode component
import SetPassword from './SetPassword'; // Import SetPassword component

const Forgot = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [step, setStep] = useState('email'); // Manage form steps

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle sending the reset link here
        setMessage('Password reset link sent to your email! Check your inbox for the code.');
        setStep('code'); // Switch to code entry step
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle verifying the reset code here
        setMessage('Code verified. You can now set your new password.');
        setStep('setPassword'); // Switch to password setting step
    };

    return (
        <div className='forgot'>
            <h1 className='h1'>Forgot Password</h1>
            {step === 'email' ? (
                <>
                    <p>Please enter your email address to reset your password:</p>
                    <form onSubmit={handleEmailSubmit}>
                        <label htmlFor="email">Enter Your Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <p id="mail">we'll send a verfication code to this E-mail if it matches ,continue with existing account</p>
                        <button type="submit">Send Reset Code</button>
                    </form>
                    {message && <p>{message}</p>}
                </>
            ) : step === 'code' ? (
                <EnterCode onCodeVerified={() => setStep('setPassword')} /> // Pass callback to EnterCode
            ) : (
                <SetPassword />
            )}
        </div>
    );
};

export default Forgot;
