import React from "react";
import "../styles/Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        I'm always open to discussing projects, ideas, or collaboration opportunities. Feel free to reach out using the contact details below!
      </p>

      <div className="contact-info">
        <p>
          <FaPhoneAlt className="icon" />
          <a href="tel:+919876543210">+91 8098003195</a>
        </p>
        <p>
          <FaEnvelope className="icon" />
          <a href="mailto:shahitha6403@gmail.com">shahitha6403@gmail.com</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
