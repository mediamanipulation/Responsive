import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null); // To reference the navbar div

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [menuOpen]);

  return (
    <nav className="navbar" ref={navbarRef}>
      <Link to="/" className="navbar-brand">Mediamanipulation</Link>
      
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`menu-items ${menuOpen ? 'active' : ''}`}>
        <Link to="/flight" className="menu-item" onClick={() => setMenuOpen(false)}>Art</Link>
        <Link to="/city" className="menu-item" onClick={() => setMenuOpen(false)}>Devlopment</Link>
        <Link to="/island" className="menu-item" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/food" className="menu-item" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
