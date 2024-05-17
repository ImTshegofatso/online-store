import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <h3>Awesome Store</h3>
        <p>123 Street, City, Country</p>
        <p>Email: info@company.com</p>
        <p>Phone: +(27) 73 456 7890</p>
      </div>
      <div className="footer-content">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/terms">Terms of Service</Link></li>
          <li><Link to="/privacy">Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="footer-content">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com/yourcompany"><FaFacebook /></a></li>
          <li><a href="https://www.twitter.com/yourcompany"><FaTwitter /></a></li>
          <li><a href="https://www.instagram.com/yourcompany"><FaInstagram /></a></li>
          <li><a href="https://www.linkedin.com/company/yourcompany"><FaLinkedin /></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Awesome Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
