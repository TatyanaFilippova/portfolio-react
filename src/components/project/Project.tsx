import "./style.css";
import { NavLink } from "react-router";

interface ProjectProps {
  title: string;
  img: string;
  index: number;
}

const Project = ({ title, img, index }: ProjectProps) => {
  return (
    <NavLink to={`/projects/${index}`} className="project">
      <div className="wrapper">
        <img src={img} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </div>
    </NavLink>
  );
};

export default Project;
