import './styles/appStyles.css';
import ParticleBackground from './components/ParticleBackground';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/skills';
import Projects from './components/projects';

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
    </div>
  );
}

export default App;
