/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

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
                <li><a href="/about">About Us</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
            </div>

            {/* Contact Us Section */}
            <div className="footer-section contact-us">
            <h4>Contact Us</h4>
            <ul>
                <li>Email: support@musicstream.com</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Address: 123 Music Lane, Harmony City</li>
            </ul>
            </div>
      </div>
      
    </>

  )
}

export default Footer
