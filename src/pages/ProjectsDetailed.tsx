import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { useParams } from "react-router";
import { projectsList } from "../helpers/projectsList";
import { EmblaCarousel } from "../components/imageSlider/ImageSlider";
import BtnPublishedSite from "../components/btnPublishedSite/btnPublishedSite";

const ProjectsDetailed = () => {
  const { id } = useParams();
  const project = projectsList[id as unknown as number];

  return (
    <main className="section">
      <div>
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <EmblaCarousel imgList={project.imgList ?? [project.img]} />
          <div className="project-details__desc">
            <p> {project.skills}</p>
          </div>
          <div className="btn-wrapper">
            <BtnGitHub link={project.gitHubLink} />
            {project.link && <BtnPublishedSite link={project.link} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsDetailed;
