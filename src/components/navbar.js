// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import Navbar styles
import logo from './logo.jpeg'; // Import the logo image

function Navbar() {
  return (
    <nav className="navbar">
      <div className="title" >
        <img src={logo} alt="Logo" className="brand-logo" />
        <Link to="/" className="title-link">
            <span className="title-stuff">Sohaib Gallery</span>
        </Link>
      </div>

      <div className="container">
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/work" className="nav-link">Work</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Booking</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
