import './styles/appStyles.css';
import ParticleBackground from './components/ParticleBackground';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="particle-div">
        <ParticleBackground className="particle-background" />
      </div>
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
