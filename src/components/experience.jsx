import '../styles/experience.css';
import { FaBriefcase } from 'react-icons/fa';

function Experience() {
  return (
    <div className='experience-container'>
      <section id='experience'>
        <h2 className='experience-title'>
          <FaBriefcase className='experience-icon' /> Experience
        </h2>
      </section>
      <div className='experience-item'>
        <span className='date-range'>July 2024 - Current</span>
        <h3>Office Contábil - Developer - Fullstack</h3>
        <p>
          Trabalho no desenvolvimento de um dashboard de clientes utilizando
          React, Tailwind CSS e Node.js. Realizo automações com Python e
          Selenium para extrair e gerenciar dados de cupons, como identificar
          empresas próximas ao evento 380. Também implementei funcionalidades
          como filtros por severidade, paginação personalizada e integração de
          gráficos com dados financeiros, garantindo usabilidade e insights
          práticos para o sistema.
        </p>
      </div>
    </div>
  );
}

export default Experience;
