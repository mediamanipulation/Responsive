import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">Mediamanipulation</Link>
      
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`menu-items ${menuOpen ? 'active' : ''}`}>
        <Link to="/flight" className="menu-item">Art</Link>
        <Link to="/city" className="menu-item">Devlopment</Link>
        <Link to="/island" className="menu-item">Services</Link>
        <Link to="/food" className="menu-item">Contact</Link>
      </div>
      
      {/* <button className="cta-button">Sign Up</button> */}
    </nav>
  );
}

export default Header;
