import "./styles/main.css";
import NavBar from "./components/navBar/NavBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <main className="section">
        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
            <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Magic-vine-shop</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Magic-vine-shop</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Magic-vine-shop</h3>
              </a>
            </li>
            <li className="project">
              <a href="./project-page.html">
                <img
                  src="./img/projects/01.jpg"
                  alt="Project img"
                  className="project__img"
                />
                <h3 className="project__title">Magic-vine-shop</h3>
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
