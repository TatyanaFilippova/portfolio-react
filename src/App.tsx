import "./styles/main.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ProjectsDetailed from "./pages/ProjectsDetailed";
import { BrowserRouter, Route, Routes } from "react-router";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects/:id" element={<ProjectsDetailed />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
