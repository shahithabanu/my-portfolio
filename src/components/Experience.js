import React from "react";
import "../styles/Experience.css";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>

      <div className="job">
        <h3>Software Engineer Intern – Sagent</h3>
        <p>
          <strong>Aug 2023 - Oct 2023 | Chennai</strong>
        </p>
        <ul>
          <li>
            Developed a <strong>LinkedIn-like platform</strong> using <strong>React.js, SQL, and PHP</strong>.
          </li>
          <li>
            Integrated <strong>Maatram Foundation and Agaram Foundation</strong> for student authentication.
          </li>
          <li>
            Implemented <strong>secure user authentication and identity verification</strong>.
          </li>
        </ul>
      </div>

 {/* Velozion Technologies - Internship */}
 <div className="job">
        <h3>Full Stack Developer Intern – Velozion Technologies</h3>
        <p>
          <strong>Dec 2023 - Apr 2024 | Bangalore</strong>
        </p>
        <ul>
          <li>
            Redesigned <strong>HTML/CSS templates</strong> for mobile responsiveness.
          </li>
          <li>
            Implemented <strong>JavaScript form validation</strong> to enhance user experience.
          </li>
          <li>
            Worked with <strong>SQL and PHP</strong> for backend operations.
          </li>
        </ul>
      </div>
      
      {/* Velozion Technologies - Full-Time */}
      <div className="job">
        <h3>Software Trainee – Velozion Technologies</h3>
        <p>
          <strong>April 2024 - Nov 2024 | Bangalore</strong>
        </p>
        <ul>
          <li>
            Developed and maintained UI using <strong>React.js, JavaScript, HTML, CSS</strong>.
          </li>
          <li>
            Worked on projects like <strong>Leave Management, Tours & Travels, and Ticket Booking Systems</strong>.
          </li>
          <li>
            Implemented <strong>chatbot solutions</strong> to automate workflows and improve user experience.
          </li>
          <li>Optimized website performance for better scalability.</li>
        </ul>
      </div>

     
    </section>
  );
};

export default Experience;
