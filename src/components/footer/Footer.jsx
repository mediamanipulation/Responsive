import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
  <div className="footer-content copyright-section"> {/* Add this */}
    © 1996 mediamanipulation
  </div>
      <div className="footer-content">
        <h4>Quick Links</h4>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
      </div>
      <div className="footer-content">
        <h4>Follow Us</h4>
        <div className="social-links">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
