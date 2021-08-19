import { Link } from 'react-scroll';

const Header = (props) => {
  return (
    <header className="header">
      <nav>
        <Link spy={true} smooth={true} to="about">
          About
        </Link>
        <Link spy={true} smooth={true}>
          Skills
        </Link>
        <Link spy={true} smooth={true}>
          Projects
        </Link>
        <Link spy={true} smooth={true}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
