import { Link, NavLink, useLocation } from "react-router";
import { useEffect } from "react";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import "./style.css";

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
      <div className="container_navBar">
        <div className="nav-row">
          <Link to="/" className="logo">
            Portfolio
          </Link>
          <BtnDarkMode />
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
