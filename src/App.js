import './styles/appStyles.css';
import ParticleBackground from './components/ParticleBackground';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <div className="particle-div">
        <ParticleBackground className="particle-background" />
      </div>
      <LandingPage />
    </div>
  );
}

export default App;
