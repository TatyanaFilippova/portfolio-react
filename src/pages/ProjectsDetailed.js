import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router";
import { projectsList } from "../helpers/projectsList";

const ProjectsDetailed = () => {
  const { id } = useParams();
  const project = projectsList[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <img src={project.img} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default ProjectsDetailed;
