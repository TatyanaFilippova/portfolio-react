import "./style.css";
import tatyana_salyt from "../../files/tatyana_salyt.pdf";
import code from "../../video/code.mp4";

const Header = () => {
  return (
    <header className="header">
      <video className="header_video" autoPlay muted loop>
        <source src={code} type="video/mp4" />
      </video>
      <div className="header_wrapper">
        <div className="box"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5"></div>
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Tanya</em>
          </strong>
          <br />a frontend developer
        </h1>
        <a
          href={tatyana_salyt}
          download="tatiana_filippova.pdf"
          className="btn"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
