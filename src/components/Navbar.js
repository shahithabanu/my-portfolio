import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import "../styles/Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${darkMode ? "dark" : ""}`}>
      <h1 className="logo">Shahitha Banu</h1>

      

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={handleToggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><Link to="home" smooth={true} duration={500} onClick={handleCloseMenu}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500} onClick={handleCloseMenu}>About</Link></li>
        <li><Link to="experience" smooth={true} duration={500} onClick={handleCloseMenu}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500} onClick={handleCloseMenu}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500} onClick={handleCloseMenu}>Skills</Link></li>
        <li><Link to="contact" smooth={true} duration={500} onClick={handleCloseMenu}>Contact</Link></li>
      </ul>

    
      {/* Dark Mode Toggle */}
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FiMoon size={24} color="white" /> : <FiSun size={24} color="black" />}
      </button>
    </nav>
  );
};

export default Navbar;
