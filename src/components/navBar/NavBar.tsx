import moon from "../../img/icons/moon.svg";
import sun from "../../img/icons/sun.svg";
import "./style.css";
import { Link, NavLink, useLocation } from "react-router";
import { useEffect } from "react";

const NavBar = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            Portfolio
          </Link>
          <button className="dark-mode-btn dark-mode-btn--active">
            <img src={moon} alt="Light mode" className="dark-mode-btn-icon" />
            <img src={sun} alt="Dark mode" className="dark-mode-btn-icon" />
          </button>
          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/#section1" className="nav-list__link">
                Projects
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink to="./skills" className="nav-list__link">
                Skills
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
