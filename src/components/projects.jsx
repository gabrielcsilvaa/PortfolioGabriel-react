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
          Desenvolvi uma aplicação web interativa usando React e JavaScript.
          Projetado para ser um espaço reflexivo para o crescimento pessoal e
          profissional, com foco na simplicidade e no minimalismo.
        </p>
        <div className='project-image-container'>
          <img
            src='/images/arte.png'
            alt='Arte do projeto'
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/PortfolioGabriel-react'
            className='project-icon-link'
          >
            <FaGithub className='github-icon' />
          </a>
        </div>
      </div>
      <div className='project-item'>
        <h3 className='project-name'>Dashboard de Clientes Office</h3>
        <p className='project-description'>
          Desenvolvi um dashboard interativo para gerenciamento de clientes,
          utilizando React, Node.js e PostgreSQL. A aplicação permite a
          visualização e filtragem de dados em tempo real, com funcionalidades
          como paginação, filtro por severidade e ordenamento dinâmico.
        </p>
        <div className='project-image-container'>
          <img
            src='/images/port.png'
            alt='Arte do projeto2'
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/ProjectWorkDashboard-react.git'
            className='project-icon-link'
          >
            <FaGithub className='github-icon' />
          </a>
        </div>
      </div>
      <div className='project-item'>
        <h3 className='project-name'>Automação de Consultas CNPJ</h3>
        <p className='project-description'>
          Desenvolvi um dashboard interativo utilizando React, Node.js e
          PostgreSQL, focado na visualização e gerenciamento de dados de
          clientes. A aplicação permite filtros dinâmicos, ordenação e
          atualização em tempo real, com design adaptável ao modo claro e
          escuro.
        </p>
        <div className='project-image-container'>
          <img
            src='/images/automo.png'
            alt='Arte do projeto3'
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/automacaoConsultaCnpj.git'
            className='project-icon-link'
          >
            <FaGithub className='github-icon' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
