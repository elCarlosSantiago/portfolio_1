import { Link } from 'react-scroll';
import logo from '../assets/favicon.ico';
const Header = (props) => {
  return (
    <header className="header">
      <Link to="landing-page" smooth={true}>
        <img alt="Save CS by Liliane Lass Erbe from the Noun Project" src={logo} />
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
