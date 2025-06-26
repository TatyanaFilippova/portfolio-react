import Header from "../components/header/Header";
import Project from "../components/project/Project";
import { projectsList } from "../helpers/projectsList";
import { motion } from "motion/react";

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
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <Project
                      key={project.title}
                      title={project.title}
                      img={project.img}
                      index={index}
                    />
                  </motion.li>
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
