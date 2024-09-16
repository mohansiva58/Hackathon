import React from 'react';
import './header.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="36" fill="currentColor" class="bi bi-scooter" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5M3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196z"/>
</svg>

        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#">Home</a></li>
          <li className="navbar-item"><a href="#">About</a></li>
          <li className="navbar-item dropdown">
            <a href="#" className="dropdown-link">Services</a>
            <ul className="dropdown-menu">
              <li className="dropdown-item"><a href="#">Service 1</a></li>
              <li className="dropdown-item"><a href="#">Service 2</a></li>
              <li className="dropdown-item"><a href="#">Service 3</a></li>
            </ul>
          </li>
          <li className="navbar-item"><a href="#">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
