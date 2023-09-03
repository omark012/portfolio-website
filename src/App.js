import './App.css';
import './Utilities.css';
import Header from './Components/Header';
import Showcase from './Components/Showcase';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
import GoToTop from './Components/GoToTop';


function App() {
  return (
    <div>
      <Header/>
      <Showcase/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <GoToTop/>
    </div>
     );
}

export default App;
