import '../styles/skills.css';
import { CiHashtag } from 'react-icons/ci';

function Skills() {
  return (
    <div className='skills'>
      <h2>
        <CiHashtag /> Skills
      </h2>
      <div className='category'>
        <h3>Web Development:</h3>
        <div className='tags'>
          <span className='tag'>JavaScript</span>
          <span className='tag'>Python</span>
          <span className='tag'>TypeScript</span>
          <span className='tag'>NodeJs</span>
        </div>
      </div>
      <div className='category'>
        <h3>Frameworks:</h3>
        <div className='tags'>
          <span className='tag'>React</span>
          <span className='tag'>Tailwind</span>
          <span className='tag'>NestJs</span>
        </div>
      </div>
      <div className='category'>
        <h3>Design Programs:</h3>
        <div className='tags'>
          <span className='tag'>Figma</span>
        </div>
      </div>
      <div className='category'>
        <h3>Database Management:</h3>
        <div className='tags'>
          <span className='tag'>PostgreSQL</span>
          <span className='tag'>MySQL</span>
        </div>
      </div>
      <div className='category'>
        <h3>Version Control:</h3>
        <div className='tags'>
          <span className='tag'>Git</span>
          <span className='tag'>GitHub</span>
        </div>
      </div>
      <div className='category'>
        <h3>Package Managers:</h3>
        <div className='tags'>
          <span className='tag'>NPM</span>
          <span className='tag'>PIP</span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
