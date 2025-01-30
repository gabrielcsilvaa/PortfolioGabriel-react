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
          Na Office Contábil, desenvolvi um dashboard de clientes utilizando
          React, Tailwind CSS e Node.js, com funcionalidades como filtros por
          severidade, paginação personalizada e gráficos integrados a dados
          financeiros, proporcionando usabilidade para verificar os dados das
          empresas. E também, realizo automações com Python e Selenium,
          incluindo a extração e gestão de dados de cupons fiscais, geração de
          relatórios e otimização de processos manuais, contribuindo para maior
          eficiência nas operações
        </p>
      </div>
    </div>
  );
}

export default Experience;
