import profilePic from '../assets/profile.png';

const About = () => {
  return (
    <div name="about" className="about">
      <section>
        <img alt="profile" src={profilePic} />
        <article>
          <h2>Hello! My name is Carlos Santiago</h2>
          <p>
            I've spent the last few years working in project engineering and leading
            multi-disciplinary teams. I am leveraging my experience with civil
            infrastructure and construction management to learn all I can about Internet
            Systems and Architecture.
          </p>
          <p>
            I love to build full-stack web applications and am passionate about Software
            Development.
          </p>
        </article>
      </section>
    </div>
  );
};

export default About;
