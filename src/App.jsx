import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import AboutMeSlider from "./components/aboutme/AboutMeSlider";
import Intro from "./components/intro/Intro";
import Footer from "./components/footer/Footer";
import "./app.scss";
// import Menu from "./components/menu/Menu";

function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <Intro/>
        <AboutMeSlider/>
        <Experience/>
        <Projects/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;