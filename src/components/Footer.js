import linkedinLogo from '../assets/linkedin_white.png';
import gitCat from '../assets/gitCat_white.png';
const Footer = () => {
  return (
    <div className="footer">
      <a rel="noreferrer" target="_blank" href="https://github.com/elCarlosSantiago">
        <img id="github-footer" src={gitCat} alt="GitHub Logo" />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/carlosnevett/">
        <img id="linkedin-footer" src={linkedinLogo} alt="Linkedin Logo" />
      </a>
    </div>
  );
};

export default Footer;
