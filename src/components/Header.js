import { Link } from 'react-scroll';

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <Link spy={true} smooth={true} to="landing-page">
          Home
        </Link>
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
