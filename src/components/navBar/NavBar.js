import moon from "../../img/icons/moon.svg";
import sun from "../../img/icons/sun.svg";
import "./style.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <a href="./index.html" className="logo">
            Portfolio
          </a>
          <button className="dark-mode-btn dark-mode-btn--active">
            <img src={moon} alt="Light mode" className="dark-mode-btn-icon" />
            <img src={sun} alt="Dark mode" className="dark-mode-btn-icon" />
          </button>
          <ul className="nav-list">
            <li className="nav-list__item">
              <a
                href="./index.html"
                className="nav-list__link nav-list__link--active"
              >
                Projects
              </a>
            </li>
            <li className="nav-list__item">
              <a href="./skills.html" className="nav-list__link">
                Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
