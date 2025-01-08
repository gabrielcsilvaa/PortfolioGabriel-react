import '../styles/projects.css';
import { FaCode, FaGithub } from 'react-icons/fa';
import process from 'process';

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
          Projetado meu portfolio para o meu crescimento pessoal e profissional,
          com foco na simplicidade e no minimalismo.
        </p>
        <div className='project-image-container'>
          <img
            src={`${process.env.PUBLIC_URL}/images/arte.png`}
            alt=''
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/PortfolioGabriel-react'
            target='_blank'
            className='project-icon-link'
            rel='noreferrer'
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
          visualização de dados contabil e filtragem de dados de empresas em
          tempo real, com funcionalidades como paginação, filtro por severidade
          e ordenamento dinâmico.
        </p>
        <div className='project-image-container'>
          <img
            src={`${process.env.PUBLIC_URL}/images/port.png`}
            alt='Arte do projeto2'
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/ProjectWorkDashboard-react.git'
            target='_blank'
            className='project-icon-link'
            rel='noreferrer'
          >
            <FaGithub className='github-icon' />
          </a>
        </div>
      </div>
      <div className='project-item'>
        <h3 className='project-name'>Automação de Consultas CNPJ</h3>
        <p className='project-description'>
          Este projeto envolve o desenvolvimento de uma automação que consulta
          informações sobre empresas a partir do CNPJ fornecido. A automação
          acessa um site específico para coletar dados como a quantidade de
          sócios, se a empresa é optante pelo Simples Nacional e outras
          informações relevantes sobre a empresa. Esses dados são então
          processados e inseridos no banco de dados da empresa em que trabalho.
        </p>
        <div className='project-image-container'>
          <img
            src={`${process.env.PUBLIC_URL}/images/automo.png`}
            alt='Arte do projeto3'
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/automacaoConsultaCnpj.git'
            target='_blank'
            className='project-icon-link'
            rel='noreferrer'
          >
            <FaGithub className='github-icon' />
          </a>
          <h2 className='projects-title'>
            <FaCode className='projects-icon' /> More projects developed
          </h2>
          <h3 className='project-name'>
            Sistema de Inserção Automática de Dados
          </h3>
          <p className='project-description'>
            Desenvolvi uma aplicação full-stack para automatizar a inserção de
            dados em um banco de dados PostgreSQL para utilizar os dados no
            Dashboard de Clientes Office, utilizando Node.js e NestJS. O projeto
            garante uma gestão eficiente e precisa dos dados, aproveitando o
            Prisma ORM para interações simples e confiáveis com o banco. O
            sistema foi projetado para ser escalável e manter a integridade dos
            dados, facilitando operações otimizadas para implementações futuras
          </p>
          <a
            href='https://github.com/gabrielcsilvaa/autoInsert-data-into-database'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='tag'>Projeto →</span>
          </a>
          <h3 className='project-name'>Tela de Carregamento em Python</h3>
          <p className='project-description'>
            Desenvolvimento de uma tela de carregamento personalizada utilizando
            Python. O projeto inclui animações fluidas e integração com sistemas
            existentes, oferecendo uma experiência visualmente atraente e
            funcional durante processos de inicialização ou espera. Ideal para
            aplicações que buscam melhorar a interação com o usuário.
          </p>
          <a
            href='https://github.com/gabrielcsilvaa/python_loading_screen.git'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='tag'>Projeto →</span>
          </a>
        </div>
        <div className='autoral'>
          <span>Created by Gabriel Cardoso</span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
