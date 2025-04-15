import "./styles/main.css";
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
// import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      {/*<Skills />*/}
      <Footer />
    </div>
  );
}

export default App;
