import '../styles/header.css';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt,
  FaGraduationCap,
} from 'react-icons/fa';
function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <ul>
          <li>
            <a href='#about'>About me</a>
          </li>
          <li>
            <a href='#education'>Education</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
        </ul>
      </nav>
      <div className='hero'>
        <h1>Oi, eu sou o Gabriel</h1>
        <p>
          <span className='highlight-yellow'>
            Motivado e adaptável, ansioso para contribuir e aprender.
          </span>
          <span className='highlight-pink'> Desenvolvedor Full Stack.</span>
          <span className='highlight-blue'> teste.</span>
        </p>
        <div className='buttons'>
          <a
            href='https://www.linkedin.com/in/gabrielprogamacao?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
            className='button'
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a href='https://github.com/gabrielcsilvaa' className='button'>
            <FaGithub /> GitHub
          </a>
          <a href='mailto:gabrielcardososilva290@gmail.com' className='button'>
            <FaEnvelope /> Email
          </a>
          <a href='/public/' className='button'>
            <FaFileAlt /> CV
          </a>
        </div>
      </div>
      <section id='education' className='education'>
        <h2>
          <FaGraduationCap /> Education
        </h2>
        <div className='education-item'>
          <p className='education-date'>Ensino Medio Completo</p>
          <h3>EEFM José Bezerra de Menezes – Ensino Médio Completo</h3>
          <p>nao sei oq botar aqui</p>
        </div>
        <div className='education-item'>
          <p className='education-date'>Janeiro de 2024 - Atual</p>
          <h3>
            Uninassau – Cursando Analise e Desenvolvimento de Sistemas (ADS)
          </h3>
          <p>Focusing on Programming languages.</p>
        </div>
      </section>
    </header>
  );
}
export default Header;
