import Header from './Header';
import NameTypewriter from './NameTypewriter';
import { Link } from 'react-scroll';
import { useState } from 'react';

const LandingPage = () => {
  const [isTyped, setIsTyped] = useState(false);

  setTimeout(() => {
    setIsTyped(true);
  }, 4000);

  return (
    <div className="landing-page">
      <div></div>
      <Header />
      <NameTypewriter
        options={{
          autoStart: true,
          loop: true,
        }}
      />
      <Link className="fas fa-chevron-circle-down" smooth={true} to="about"></Link>
    </div>
  );
};

export default LandingPage;
