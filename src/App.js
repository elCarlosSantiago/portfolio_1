import './styles/appStyles.css';
import Header from './components/Header';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="App">
      <div className='particle-div'>
        <ParticleBackground className="particle-background" />
      </div>
      <Header />
    </div>
  );
}

export default App;
