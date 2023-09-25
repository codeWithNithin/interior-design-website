import './project-card.css';

function ProjectCard({ projectObj }) {
  let cssClass =
    projectObj.imgPath === '/project-3.png' ||
    projectObj.imgPath === '/project-4.png'
      ? 'm-t-40'
      : '';
  return (
    <div className={`project-card ${cssClass}`}>
      <div className="card-header">
        <img
          src={projectObj.imgPath}
          alt="project 1"
          height="525"
          className={projectObj.cssClass}
        />
      </div>
      <div className="card-body">
        <div className="card-text">
          <h3> {projectObj.title} </h3>
          <p className="small-paragraph"> {projectObj.subTitle} </p>
        </div>
        <div className="card-btn">
          <img src="/elipse.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
