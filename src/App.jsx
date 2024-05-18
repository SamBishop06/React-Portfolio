
import "./styles/App.css";
import About from "./components/About";
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
// import { BrowserRouter as Router } from 'react-router-dom';





function App() {
  

  return (
    <>
    <div className="Outside-boarder">
      {/* <Router>
        <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/Reusme" element={<Resume/>}/>
              <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router> */}

        <div className="Nav-style">

          <Header />
          <About/>
          <Portfolio/>
          <Resume/>
          <Contact/>
          <Footer/>
          
        </div>
        
      </div>
      
      
    </>
  )
}

export default App;
