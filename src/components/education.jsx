import '../styles/education.css';
import { FaGraduationCap } from 'react-icons/fa';
function Education() {
  return (
    <section id='education' className='education'>
      <div className='timeline'></div>
      <h2>
        <FaGraduationCap /> Education
      </h2>
      <div className='education-item'>
        <div className='timeline-dot'></div>
        <p className='education-date'>Ensino Medio Completo</p>
        <h3>EEFM José Bezerra de Menezes – Ensino Médio Completo</h3>
        <p>nao sei oq botar aqui</p>
      </div>
      <div className='education-item'>
        <div className='timeline-dot'></div>
        <p className='education-date'>Janeiro de 2024 - Atual</p>
        <h3>
          Uninassau – Cursando Analise e Desenvolvimento de Sistemas (ADS)
        </h3>
        <p>Focusing on Programming languages.</p>
      </div>
    </section>
  );
}
export default Education;
