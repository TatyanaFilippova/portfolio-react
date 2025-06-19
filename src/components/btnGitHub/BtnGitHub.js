import "./style.css"
import gitHubBblack from "./img/gitHub-black.svg"


const BtnGitHub = ({link}) => {
    return (
            <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
                <img src={gitHubBblack} alt="" className="" />
                GitHub repo
            </a>
    )
}

export default BtnGitHub