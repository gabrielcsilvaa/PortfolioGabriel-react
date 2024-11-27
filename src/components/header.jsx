import '../styles/header.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
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
        <section id='about'>
          <img className='foto' src='/images/foto.jpeg' alt='' />
          <h1>Oi, eu sou o Gabriel</h1>
          <p>
            <span className='highlight-yellow'>
              Motivado e adaptável, ansioso para contribuir e aprender.
            </span>
            <span className='highlight-pink'> Desenvolvedor Full Stack. </span>
            <span className='highlight-blue'>
              Busco colaborar e aplicar meu conhecimento em áreas que exigem
              criatividade e resolução de desafios.
            </span>
          </p>
        </section>
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
          <a href='gabrielcardososilva290@gmail.com' className='button'>
            <FaEnvelope /> Email
          </a>
          <a href='/images/Currículo Gabriel Cardoso.pdf' className='button'>
            <FaFileAlt /> CV
          </a>
        </div>
      </div>
    </header>
  );
}
export default Header;
