import React, { useState } from 'react';
import './setpassword.css'; // Ensure the same CSS file if needed

const SetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }
        // Add logic to handle setting the new password here
        setMessage('Password has been successfully reset.');
    };

    return (
        <div className='set-password'>
            <h2>Set New Password</h2>
            <form onSubmit={handlePasswordSubmit}>
                <label htmlFor='newPassword'>New Password:</label>
                <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <label htmlFor='confirmPassword'>Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Set Password</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SetPassword;
