import { Link } from 'react-scroll';
import whiteLogo from '../assets/favicon_white.ico';
import orangeLogo from '../assets/favicon_orange.ico';
import { useState } from 'react';
const Header = (props) => {
  const [logo, setLogo] = useState(orangeLogo);

  const handleSetActive = () => {
    setLogo(orangeLogo);
  };

  const handleSetInactive = () => {
    setLogo(whiteLogo);
  };


  return (
    <header className="header">
      <Link
        to="landing-page"
        smooth={true}
        spy={true}
        onSetActive={handleSetActive}
        onSetInactive={handleSetInactive}>
        <img alt="CS logo" src={logo} />
      </Link>
      <nav>
        <Link spy={true} smooth={true} to="about">
          About
        </Link>
        <Link spy={true} smooth={true} to="skills">
          Skills
        </Link>
        <Link spy={true} smooth={true} to="projects">
          Projects
        </Link>
        <Link spy={true} smooth={true} to="contact">
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
