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
          Criei um portfólio interativo usando React e JavaScript para
          apresentar meus projetos e habilidades. O design é focado em
          simplicidade e funcionalidade.
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
        <h3 className='project-name'>RoboCFE</h3>
        <p className='project-description'>
          Desenvolvi para a Office um robô em Python para automatizar a consulta
          e o download de cupons fiscais eletrônicos (CF-e) no portal da SEFAZ,
          utilizando Selenium e o WebDriver do Google Chrome. A aplicação
          realiza login, navega pelos módulos do DTE e do Ambiente Seguro,
          coleta as chaves dos cupons via CSV e faz o download massivo dos XMLs
          quando a empresa possui grande volume de CF-e, explorando a API
          interna da SEFAZ. Todo o fluxo é estruturado em módulos autenticação,
          classes de sessão, scripts de navegação e utilitários garantindo
          organização, facilidade de manutenção e escalabilidade. O sistema
          organiza automaticamente os XMLs por empresa, ano e mês, eliminando
          tarefas repetitivas e acelerando drasticamente o processo de
          conferência fiscal. empresa.
        </p>
        <div className='project-image-container'>
          <img
            src={`${process.env.PUBLIC_URL}/images/RoboCFE.png`}
            alt='Arte do projeto3'
            className='project-image'
          />
          <a
            href='https://github.com/gabrielcsilvaa/automacao-cupons-sefaz.git'
            target='_blank'
            className='project-icon-link'
            rel='noreferrer'
          >
            <FaGithub className='github-icon' />
          </a>
          <h2 className='projects-title'>
            <FaCode className='projects-icon' /> More projects developed
          </h2>
          <h3 className='project-name'>Gestão back end django</h3>
          <p className='project-description'>
            Desenvolvi o backend Gestão Office utilizando Django REST Framework,
            projetado para gerenciar empresas, usuários, faturamentos, folha de
            pagamento e atividades administrativas de forma centralizada. A API
            possui diversos endpoints, todos autenticados via token, permitindo
            listar empresas, contratos, faturamentos, sócios, empregados e
            contadores, além de relatórios como atividades por módulo ou
            importações e lançamentos manuais. O código é organizado por apps
            modulares Authenticator, Get_Empresas, Get_Folha, Get_Usuarios e
            Get_Main_Pages para facilitar manutenção, escalabilidade e nova
            adição de funcionalidades. O resultado é uma estrutura robusta e
            segura, que agiliza o controle de operações administrativas internas
            e melhora a visibilidade dos indicadores corporativos.
          </p>
          <a
            href='https://github .com/gabrielcsilvaa/gestao-office-back.git'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='tag'>Projeto →</span>
          </a>
          <h3 className='project-name'>
            Automação de escrituração ISS fortaleza
          </h3>
          <p className='project-description'>
            Desenvolvi um robô para a escrituração de notas fiscais no sistema
            ISS Fortaleza, utilizando Python e Selenium. A automação realiza
            desde a extração de informações de uma planilha para alimentar o
            robô e a inserção de dados, até a navegação no sistema para validar,
            recusar ou confirmar notas, otimizando o processo manual e
            tratamento de exceções para evitar falhas no fluxo.
          </p>
          <a
            href='https://github.com/gabrielcsilvaa/RoboIssFortaleza.git'
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='tag'>Projeto →</span>
          </a>
          <h3 className='project-name'>Office gestao front</h3>
          <p className='project-description'>
            Desenvolvi uma aplicação full-stack para centralizar e gerenciar
            dados internos da empresa, com backend em Django e frontend em
            Next.js. O sistema consome dados do ERP contábil e organiza essas
            informações em painéis interativos e segmentados por área, como
            organização, demografia e fiscal, permitindo análises rápidas e
            tomadas de decisão baseadas em dados reais. Toda a arquitetura foi
            projetada para ser modular e escalável, com integração via APIs
            REST, autenticação segura e estrutura preparada para crescimento
            contínuo. O objetivo foi criar uma base sólida para consolidar os
            indicadores da empresa em um único ambiente confiável e acessível.
          </p>
          <a
            href='https://github.com/DeveloperOffice/office-gestao-front.git'
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
