import React, { useState } from "react";
import "../styles/Projects.css";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "E-Commerce App",
      description: (
        <>
          A clean and responsive <b>e-commerce platform</b> with a shopping cart, product pages, and checkout functionality.
          <ul>
            <li>Responsive UI using Bootstrap.</li>
            <li>Add to Cart, Checkout flow, and Order summary.</li>
            <li>Supports product filtering and dynamic routing.</li>
          </ul>
          <p className="tech-stack"><strong>Tech Stack:</strong> React.js, Redux, Bootstrap</p>
        </>
      ),
      link: "https://ecommerce-u.netlify.app/"
    },
    {
      title: "Recipe Finder App",
      description: (
        <>
          A <b>recipe search platform</b> where users can find and save their favorite recipes.
          <ul>
            <li>Search by ingredients or dish name.</li>
            <li>Favorites with heart icon & local storage.</li>
            <li>Responsive grid layout for recipe cards.</li>
          </ul>
          <p className="tech-stack"><strong>Tech Stack:</strong> React.js, Redux, CSS Modules</p>
        </>
      ),
      link: "https://find-recei.netlify.app/"
    },
    {
      title: "Financial Dashboard",
      description: (
        <>
          An interactive <b>dashboard to track expenses and analytics</b>.
          <ul>
            <li>Dynamic charts and graphs using Chart.js.</li>
            <li>Light/Dark mode toggle.</li>
            <li>User-friendly layout and navigation.</li>
          </ul>
          <p className="tech-stack"><strong>Tech Stack:</strong> React.js, Chart.js, Tailwind CSS</p>
        </>
      ),
      link: "https://financial-das.netlify.app/"
    },
    {
      title: "Blog CMS",
      description: (
        <>
          A <b>content management platform</b> enabling role-based access for admins and editors.
          <ul>
            <li>Super Admin: Manage editors & articles.</li>
            <li>Editor: Add and view articles.</li>
            <li>Guest Dashboard: View without login.</li>
            <li>Feedback system & dynamic article loader.</li>
          </ul>
          <p className="tech-stack"><strong>Tech Stack:</strong> React, JavaScript, PHP, SQL, Bootstrap</p>
        </>
      ),
      link: "https://github.com/shahithabanu/blog.git"
    },
    {
      title: "Employee Management System",
      description: (
        <>
          A <b>role-based employee platform</b> with secure login and leave handling.
          <ul>
            <li>Super Admin: Manage HRs & Employees.</li>
            <li>HR: Oversee employee data & leaves.</li>
            <li>Employee: Apply leaves, track status.</li>
            <li>Optimized database and secure access.</li>
          </ul>
          <p className="tech-stack"><strong>Tech Stack:</strong> React, PHP, SQL, Bootstrap</p>
        </>
      ),
      link: "https://github.com/shahithabanu/admin-hr-employee-.git"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-list">
        {displayedProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <div className="description">{project.description}</div>
            <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
              Live Demo <FaExternalLinkAlt />
            </a>
          </div>
        ))}
      </div>
      <div className="more-btn-container">
        <button className="more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "More Projects"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
