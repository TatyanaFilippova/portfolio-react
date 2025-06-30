import gitHub from "../../img/icons/gitHub.svg";
import telegram from "../../img/icons/telegram.svg";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://github.com/TatyanaFilippova" target="_blank" rel="noreferrer" >
                <img src={gitHub} alt="Link" className="" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/enotmafia" target="_blank" rel="noreferrer" >
                <img src={telegram} alt="Link" className="" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 frontend-dev.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
