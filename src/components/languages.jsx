import { LuLanguages } from 'react-icons/lu';
import '../styles/languages.css';

function Languages() {
  return (
    <div className='languages'>
      <h2>
        <LuLanguages /> Languages
      </h2>
      <div className='language'>
        <span>Português - Native</span>
        <div className='line native'></div>
      </div>
      <div className='language'>
        <span>English - Intermediário</span>
        <div className='line proficiency'></div>
      </div>
      <div className='language'></div>
    </div>
  );
}

export default Languages;
