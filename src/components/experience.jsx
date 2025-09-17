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
        <span className='date-range'>Jan 2025 - Current</span>
        <h3>Assessoria Office Contábil - Desenvolvedor - BackEnd</h3>
        <p>
          Na Office Contábil como dev fullstack, Desenvolvi automações diárias
          com Python integradas a órgãos como SEFAZ e ISS. Fui responsável pelo
          backend de uma aplicação em Python/Django, conectada via ODBC a um
          banco de dados Sybase legado, extraindo dados diretamente do sistema
          Domínio e a automação reduziu drasticamente o tempo de execução de
          tarefas fiscais e otimizou a gestão, substituindo relatórios manuais
          por visualizações gerenciais eficientes
        </p>
      </div>
      <div className='experience-item'>
        <span className='date-range'>Jul 2024 - Jan 2025</span>
        <h3>Assessoria Office Contábil - Estágio Desenvolvedor - Fullstack</h3>
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
