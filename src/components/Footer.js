import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Shahitha Banu. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/shahitha-banu-081575242/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> 
        </a>
        <a href="https://github.com/shahithabanu" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 
        </a>
        <a href="mailto:shahitha6403@gmail.com">
        <SiGmail /> 
        </a>
      </div>
    </footer>
  );
};

export default Footer;
