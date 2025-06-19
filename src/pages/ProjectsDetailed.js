import icon from "../img/projects/magicVineShop.jpg";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";

const ProjectsDetailed = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Magic-vine-shop</h1>
          <img src={icon} alt="" className="project-details__cover" />
          <div className="project-details__desc">
            <p>Skills: React, Node.js</p>
          </div>
          <BtnGitHub link="https://github.com"/>
        </div>
      </div>
    </main>
  );
};

export default ProjectsDetailed;
