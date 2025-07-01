import { useEffect, useRef } from "react";
import moon from "../../img/icons/moon.svg";
import sun from "../../img/icons/sun.svg";
import "./style.css";
import { useLocalStorage } from "../../utils/useLocalStorage";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "light");
  const btnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!btnRef.current) return;
    if (darkMode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add("dark-mode-btn--active");
    } else {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove("dark-mode-btn--active");
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((currentValue: string) => {
      return currentValue === "light" ? "dark" : "light";
    });
  };
  return (
    <>
      <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
        <img src={sun} alt="Dark mode" className="dark-mode-btn-icon" />
        <img src={moon} alt="Light mode" className="dark-mode-btn-icon" />
      </button>
    </>
  );
};

export default BtnDarkMode;
