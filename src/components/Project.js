const Project = (props) => {
  const { data } = props;

  const orientation = data.project_id % 2 === 0 ? true : false;

  return (
    <article className="project">
      {orientation && <div className="image-wrapper">
        <img alt="project-1-thumbnail" src={data.profile} />
      </div>}
      <div className="project-description">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div className="link-wrapper">
          <a target="_blank" rel="noreferrer" href={data.repoLink}>
            Visit Repository
          </a>
          <p>|</p>
          <a target="_blank" rel="noreferrer" href={data.deployLink}>
            Visit Deployment
          </a>
        </div>
      </div>
      {!orientation && <div className="image-wrapper">
        <img alt="project-1-thumbnail" src={data.profile} />
      </div>}
    </article>
  );
};

export default Project;
