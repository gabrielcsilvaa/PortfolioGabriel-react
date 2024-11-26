import '../styles/experience.css';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  return (
    <div className='experience-container'>
      <h2 className='experience-title'>
        <FaBriefcase className='experience-icon' /> Experience
      </h2>
      <div className='experience-item'>
        <span className='date-range'>July 2024 - Current</span>
        <h3>Office Contábil - Developer - Fullstack</h3>
        <p>
          Work on the development of pages and landing pages using tools such as
          HTML, CSS, JavaScript and WordPress, and maintain and present reports,
          and visualizations to provide insights and recommendations based on
          analysis performed.
        </p>
        <button className='reference-button'>Reference Letter →</button>
      </div>
    </div>
  );
}

export default Experience;
