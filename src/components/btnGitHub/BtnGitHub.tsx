import "./style.css";
import gitHubBblack from "./img/gitHub-black.svg";

interface ButtonProps {
  link: string;
}

const BtnGitHub = ({ link }: ButtonProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubBblack} alt="GitHub Black" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
