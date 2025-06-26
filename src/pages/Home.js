import Header from "../components/header/Header";
import Project from "../components/project/Project";
import { projectsList } from "../helpers/projectsList";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container" id="section1">
          <h2 className="title-1">Projects</h2>
          <div>
            <ul className="projects">
              {projectsList.map((project, index) => (
                <div className="project-wrapper">
                  <Fade cascade delay={index * 500} style={{ width: "100%" }} triggerOnce>
                    <Project
                      key={project.title}
                      title={project.title}
                      img={project.img}
                      index={index}
                    />
                  </Fade>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
