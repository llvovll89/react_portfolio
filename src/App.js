import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkContextProvider } from './context/darkContext';
import { Navbar } from './components/navbar/Navbar';
import Project from './pages/project/Project';
import About from './pages/about/About';
import { Home } from './home/Home';
import { Contact } from './pages/contact/Contact';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <DarkContextProvider>
      <Router basename="react_portfolio">
        <div className="wrap">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="project" element={<Project />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </DarkContextProvider>
  );
}

export default App;
