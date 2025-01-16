import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setIsError(true);
      return;
    }

    setIsError(false);
    setIsSending(true);

    emailjs
      .send(
        'service_sypbbwn', // Replace with your EmailJS service ID
        'template_mf735io', // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'BSgkI6G7luphX9qhG' // Replace with your EmailJS public key
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsSending(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Failed to send message:', error.text);
          setIsSending(false);
          setIsError(true);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Contact Me</h2>
        {isSubmitted && <p className="success-message">Your message has been sent successfully!</p>}
        {isError && <p className="error-message">Failed to send message. Please try again.</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>
          <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
