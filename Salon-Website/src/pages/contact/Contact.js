import React, { useState } from 'react';
import './contact.css';
import Navbar from '../../components/navbar/Navbar';
import Menu from '../../components/menu/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS service and template IDs (replace with your own)
    const serviceID = 'service_yhyo8we';
    const templateID = 'template_wcnl5if';
    const userID = 'dTdew8Hyq58XaMGhL';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Message sent successfully:', response.status, response.text);
        setSuccessMessage('Your message has been sent successfully!');
        setErrorMessage('');
        // Clear the form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((err) => {
        console.error('Failed to send message:', err);
        setErrorMessage('Failed to send your message. Please try again later.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="contact-page">
      {/* Navbar  */}
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="contact-section">
        {/* Contact header  */}
        <div className="contact-header">
          <h1 className="header-heading">Contact Us</h1>
          <div className="icon-row">
            <div className="icon-container">
              <FontAwesomeIcon className='icons' icon={faLocationDot} />
              <p className="icon-label">Address</p>
              <p className="icon-details">2/234, Anna Nagar, Krishnagiri</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className='icons' icon={faEnvelope} />
              <p className="icon-label">Email</p>
              <p className="icon-details">gunad210@gmail.com</p>
            </div>
            <div className="icon-container">
              <FontAwesomeIcon className='icons' icon={faPhone} />
              <p className="icon-label">Phone</p>
              <p className="icon-details">636-991-7195</p>
            </div>
          </div>
        </div>
        {/* Contact container  */}
        <div className="contact-map-container">
          <div className="contact-container">
            <p className="tagline">Book an appointment and experience our exceptional services</p>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                required
                onChange={handleChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                required
                onChange={handleChange}
              />
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Your Message"
                required
                onChange={handleChange}
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          {/* Map */}
          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=12.532958197371064, 78.20715475773936+(guna%20Salon)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              title="Map"
              className="map-container"
            ></iframe>
          </div>
        </div>
        {/* Menu  */}
        <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      </div>
    </div>
  );
};

export default ContactPage;
