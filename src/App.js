import "./Utilities.css";
import Header from "./Components/Header";
import Showcase from "./Components/Showcase";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Portfolio from "./Components/Portfolio";
import GoToTop from "./Components/GoToTop";
import Experience from "./Components/Experience";

function App() {
  return (
    <div>
      <Header />
      <Showcase />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
      <GoToTop />
    </div>
  );
}

export default App;
