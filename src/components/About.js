import resumeIcon from '../assets/resume_icon.png';
import resume from '../assets/Carlos_Nevett_Resume.pdf';

const About = () => {
  return (
    <div className="about">
      <section>
        <div className="text-and-link">
          <article>
            <h2>About me</h2>
            <p>I am a full-stack software engineer with a degree in civil engineering.</p>
            <p>
              I've spent the last few years working in project engineering and leading
              multi-disciplinary teams. I am leveraging my experience with civil
              infrastructure and construction management to learn all I can about internet
              systems and architecture.
            </p>
            <p>
              I love to build full-stack web applications and am passionate about software
              development.
            </p>
            <p>Click below for my resume and the code for this site!</p>
          </article>
          <div className="resume-text">
            <a href={resume} download>
              <button>
                <img alt="resume icon" src={resumeIcon} />
              </button>
            </a>
            <a
              href={'https://github.com/elCarlosSantiago/portfolio_1'}
              target="_blank"
              rel="noreferrer">
              <i class="fas fa-code"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
