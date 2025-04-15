import icon from "../img/projects/magicVineShop.jpg"
import gitHubBblack from "../img/icons/gitHub-black.svg"



const ProjectsDetailed = () => {
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">Magic-vine-shop</h1>
          <img
            src={icon}
            alt=""
            className="project-details__cover"
          />
          <div className="project-details__desc">
            <p>Skills: React, Node.js</p>
          </div>

          <a href="#!" className="btn-outline">
            <img src={gitHubBblack} alt="" className="" />
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectsDetailed;
