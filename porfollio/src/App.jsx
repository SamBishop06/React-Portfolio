import React  from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";



function App() {
  
  return (
    
    <div>
      <About />
      <Portfolio />
      <Resume />
      <Projects/>
      <Contact/>
      
    </div>
    
  )
}

export default App
