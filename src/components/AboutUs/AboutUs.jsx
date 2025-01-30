/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './AboutUs.css';
import { assets } from '../../assets/assets';

const AboutUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <div className="about-session" id="about_set">
      <header className="about-us-header">
        <h1>About Us</h1>
        <p>Connecting the world through the power of music.</p>
      </header>


      {/* About us content */}
      <div className="about-us-content">

        <section className="about-section">
          <img src={assets.p2} alt="Our Aim" className="section-image" />
          <div className="text-content">
            <h2>Our Aim</h2>
            <p>
              <strong>Transforming how the world connects through music.</strong>
              <br />
              At <strong>[Foxplayer]</strong>, we strive to redefine the way you experience music. Our goal is simple yet profound:
            </p>
            <ul>
              <li>Curate an unparalleled music journey for every listener.</li>
              <li>Foster personal connections through sound.</li>
              <li>Champion emerging talent in the music industry.</li>
            </ul>
          </div>
        </section>
        

        <section className="about-section">
          <img src={assets.headset1} alt="Our Mission" className="section-image" />
          <div className="text-content">
            <h2>Our Mission</h2>
            <p>
              <strong>Empowering music lovers and creators to thrive in harmony.</strong>
              <br />
              Our mission is to build a vibrant music community by:
            </p>
            <ul>
              <li>Delivering a seamless and personalized streaming experience.</li>
              <li>Nurturing a global music community that celebrates diversity.</li>
              <li>Supporting the creative spirit of artists and fans alike.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you! Fill out the form below and let’s connect.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            <strong>Name:</strong>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>
          <label>
          <strong>Email:</strong>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
          <strong>Message:</strong>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
              required
            ></textarea>
          </label>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
    </>
    
  );
};

export default AboutUs;
