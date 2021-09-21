import Project from './Project';
import { project1, project2 } from '../assets/project_data';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <Project data={project1} />
        <Project data={project2} />
      </div>
    </section>
  );
};

export default Projects;
