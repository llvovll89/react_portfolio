import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DarkContextProvider } from './context/darkContext';
import { DarkMode } from './common/DarkMode';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './home/Home';
import { About } from './pages/about/About';
import { Project } from './pages/project/Project';
import { Contact } from './pages/contact/Contact';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      <DarkContextProvider>
        <Router basename="react_portfolio">
          <div className="wrap">
            <Navbar />
            <DarkMode />
            <Routes>
              <Route path="/">
                <Route index exact element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="project" element={<Project />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </div>
        </Router>
      </DarkContextProvider>
    </>
  );
}

export default App;
