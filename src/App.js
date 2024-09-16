// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';          // Import Navbar component
import Login from './login';            // Ensure this path is correct
import ForgotPassword from './forgotpassword';  // Corrected to PascalCase for consistency
import EnterCode from './EnterCode'; // Ensure the file is named EnterCode.js
import SetPassword from './SetPassword'; // Ensure the file is named SetPassword.js
import Signup from './signup';        // Ensure this path is correct

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Render Navbar component */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/enter-code" element={<EnterCode />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/signup" element={<Signup />} /> {/* Updated path to lowercase for consistency */}
      </Routes>
    </Router>
  );
};

export default App;
