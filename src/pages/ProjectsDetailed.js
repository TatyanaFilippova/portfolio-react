import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router";
import { projectsList } from "../helpers/projectsList";
import { ImageSlider } from "../components/imageSlider/ImageSlider";

const ProjectsDetailed = () => {
  const { id } = useParams();
  const project = projectsList[id];
  return (
    <main className="section">
      <div>
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <ImageSlider />
          <div className="project-details__desc">
            <p> {project.skills}</p>
          </div>
          <BtnGitHub link={project.gitHubLink} />
        </div>
      </div>
    </main>
  );
};

export default ProjectsDetailed;
