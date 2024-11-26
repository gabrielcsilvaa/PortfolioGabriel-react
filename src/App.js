import './App.css';
import Header from './components/header';
import Education from './components/education';
import Languages from './components/languages';
import Skills from './components/skills';
function App() {
  return (
    <div className='App'>
      <Header />
      <header className='App-header'></header>
      <Education />
      <Languages />
      <Skills />
    </div>
  );
}

export default App;
