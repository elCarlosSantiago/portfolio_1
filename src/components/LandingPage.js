import Header from './Header';
import NameTypewriter from './NameTypewriter';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <NameTypewriter
        options={{
          autoStart: true,
          loop: true,
        }}
      />
      <i class="fas fa-chevron-circle-down"></i>
    </div>
  );
};

export default LandingPage;
