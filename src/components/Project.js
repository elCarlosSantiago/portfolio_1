import MediaQuery from 'react-responsive';

const Project = (props) => {
  const { data } = props;
  const smallTablet = 554;
  const orientation = data.project_id % 2 === 0 ? true : false;

  return (
    <article className="project">
      <MediaQuery minWidth={smallTablet}>
        {orientation && (
          <div className="image-wrapper">
            <img alt="project-1-thumbnail" src={data.profile} />
          </div>
        )}
      </MediaQuery>
      <div className="project-description">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="link-wrapper">
          <a target="_blank" rel="noreferrer" href={data.repoLink}>
            Repository
          </a>
          <p>|</p>
          <a target="_blank" rel="noreferrer" href={data.deployLink}>
            Deployment
          </a>
        </div>
      </div>
      <MediaQuery minWidth={smallTablet}>
        {!orientation && (
          <div className="image-wrapper">
            <img alt="project-1-thumbnail" src={data.profile} />
          </div>
        )}
      </MediaQuery>
    </article>
  );
};

export default Project;
