import '../styles/projects.css';
import { FaCode, FaGithub } from 'react-icons/fa';

function Projects() {
  return (
    <div className='projects-container'>
      <section id='projects'>
        <h2 className='projects-title'>
          <FaCode className='projects-icon' /> Projects
        </h2>
      </section>
      <div className='project-item'>
        <h3 className='project-name'>Personal Portfolio</h3>
        <p className='project-description'>
          Developed an interactive web application using Astro and Tailwind.
          Designed to be a reflective space for personal and professional
          growth, with a focus on simplicity and minimalism.
        </p>
        <div className='project-links'>
          <a
            href='https://github.com/gabrielcsilvaa/PortfolioGabriel-react'
            className='project-link'
          >
            <FaGithub className='icon' /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
