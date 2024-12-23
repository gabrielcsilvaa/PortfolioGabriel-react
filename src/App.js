import './App.css';
import Header from './components/header';
import Education from './components/education';
import Languages from './components/languages';
import Skills from './components/skills';
import Experience from './components/experience';
import Projects from './components/projects';
function App() {
  return (
    <div className='App'>
      <Header />
      <header className='App-header'></header>
      <Education />
      <Languages />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
