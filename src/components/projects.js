import profile from '../assets/profile.png';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <article className="project p-1">
        <div className="image-wrapper">
          <img alt="project-1-thumbnail" src={profile} />
        </div>
        <div className="project-description">
          <h3>Project 1 Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc
            mattis enim ut tellus. Egestas maecenas pharetra convallis posuere morbi leo.
            Nec ultrices dui sapien eget. Commodo odio aenean sed adipiscing diam. Id nibh
            tortor id aliquet lectus proin nibh nisl. Lectus proin nibh nisl condimentum
            id.{' '}
          </p>
          <a href="#projects">Visit Repository</a>
          <p style={{ display: 'inline-block', padding: '0 0.2rem' }}>|</p>
          <a href="#projects">Visit Deployment</a>
        </div>
      </article>
      <article className="project p-2">
        <div className="project-description">
          <h3>Project 2 Title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui nunc
            mattis enim ut tellus. Egestas maecenas pharetra convallis posuere morbi leo.
            Nec ultrices dui sapien eget. Commodo odio aenean sed adipiscing diam. Id nibh
            tortor id aliquet lectus proin nibh nisl. Lectus proin nibh nisl condimentum
            id.{' '}
          </p>
          <a href="#projects">Visit Repository</a>
          <p style={{ display: 'inline-block', padding: '0 0.2rem' }}>|</p>
          <a href="#projects">Visit Deployment</a>
        </div>
        <div className="image-wrapper">
          <img alt="project-2-thumbnail" src={profile} />
        </div>
      </article>
    </section>
  );
};

export default Projects;
