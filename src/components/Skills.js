import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      
      <div className="skills-category">
        <h3> Programming Languages</h3>
        <div className="skills-container">
          <span className="skill-badge">JavaScript</span>
        </div>
      </div>

      <div className="skills-category">
        <h3> Frontend Development</h3>
        <div className="skills-container">
          <span className="skill-badge">HTML</span>
          <span className="skill-badge">CSS</span>
          <span className="skill-badge">Bootstrap</span>
          <span className="skill-badge">React.js</span>
          <span className="skill-badge">Responsive Web Design</span>
          <span className="skill-badge">UI/UX Optimization</span>
        </div>
      </div>

      <div className="skills-category">
        <h3> Backend Development</h3>
        <div className="skills-container">
          <span className="skill-badge">PHP</span>
          <span className="skill-badge">SQL (MySQL)</span>
        </div>
      </div>

      <div className="skills-category">
        <h3> Tools & Technologies</h3>
        <div className="skills-container">
          <span className="skill-badge">Git</span>
          <span className="skill-badge">GitHub</span>
          <span className="skill-badge">REST APIs</span>
          <span className="skill-badge">AJAX</span>
          <span className="skill-badge">React Hooks</span>
          <span className="skill-badge">Authentication & Role-Based Access</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
