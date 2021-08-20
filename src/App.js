import './styles/appStyles.css';
import ParticleBackground from './components/ParticleBackground';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <div className="particle-div">
        <ParticleBackground className="particle-background" />
      </div>
      <LandingPage />
      <About />
      <Skills />
    </div>
  );
}

export default App;
