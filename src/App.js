import './styles/appStyles.css';
import ParticleBackground from './components/ParticleBackground';
import LandingPage from './components/LandingPage';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className="particle-div">
        <ParticleBackground className="particle-background" />
      </div>
      <LandingPage />
      <About />
    </div>
  );
}

export default App;
