import Header from './Header';
import NameTypewriter from './NameTypewriter';
import { Link } from 'react-scroll';
const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <div></div>
      <NameTypewriter
        options={{
          autoStart: true,
          loop: true,
        }}
      />
      <Link class="fas fa-chevron-circle-down" smooth={true} to="about"></Link>
    </div>
  );
};

export default LandingPage;
