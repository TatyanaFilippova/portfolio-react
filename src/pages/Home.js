import Header from "../components/header/Header";
import Project from "../components/project/Project";
import { projectsList } from "../helpers/projectsList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container" id="section1">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            {projectsList.map((project) => (
              <Project
                key={project.title}
                title={project.title}
                img={project.img}
              />
            ))}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
