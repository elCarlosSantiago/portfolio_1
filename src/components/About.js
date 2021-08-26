import saveIcon from '../assets/favicon.ico';
import profilePic from '../assets/profile.png';
import resume from '../assets/Carlos_Nevett_Resume.pdf';

const About = () => {
  return (
    <div className="about">
      <section>
        <img alt="profile" src={profilePic} className='profile-picture'/>
        <div className="text-and-link">
          <article>
            <h2>About me</h2>
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
            <p>
              I'm always looking to stay busy so check back for regular updates to the
              projects section!
            </p>
          </article>

          <a href={resume} download>
            <button>
              <span>Download my resume</span>
              <img alt="Save CS by Liliane Lass Erbe from the Noun Project" src={saveIcon} />
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
