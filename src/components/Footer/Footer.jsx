/* eslint-disable no-unused-vars */
import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';



const Footer = () => {
  return (
    <>
      <div className="footer-session">
        {/* Company Information Section */}
        <div className="footer-section company-info">
          <img src={assets.logo} alt="Company Logo" className="footer-logo" />
          <h3>Foxplayer</h3>
          <p>Echo Your Tunes</p>
        </div>

        {/* Useful Links Section */}
        <div className="footer-section useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about_set">About Us</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="footer-section contact-us">
          <h4>Contact Us</h4>
          <ul>
            <li><FaEnvelope /> Email: levisonawalu251@gmail.com</li>
            <li><FaPhone /> Phone: +265 99 86 42 782</li>
            <li><FaMapMarkerAlt /> Address: Lilongwe, Malawi</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://x.com/LevisonAwalu" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com/awalulevison/?hl=en" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; 2025 Foxplayer. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;