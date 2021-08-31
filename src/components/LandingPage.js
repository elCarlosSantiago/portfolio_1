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
      <Header />
      <div></div>
      <div></div>
      <div></div>
      <NameTypewriter
        options={{
          autoStart: true,
          loop: true,
        }}
      />

      <div className={isTyped ? 'short-bio enabled' : 'short-bio'}>
        <p>I'm a Full-Stack Software Engineer</p>
        <p>With a background in Civil Engineering</p>
        <p>Welcome to my website!</p>
      </div>
      <Link className="fas fa-chevron-circle-down" smooth={true} to="about"></Link>
    </div>
  );
};

export default LandingPage;
