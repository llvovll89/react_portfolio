import React, { useEffect } from 'react';
import AOS from 'aos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'aos/dist/aos.css';
import { DarkContextProvider } from './context/darkContext';
import { DarkMode } from './components/toggle/darkmode/DarkMode';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './home/Home';
import { About } from './pages/about/About';
import { ReactProject } from './pages/project/react/ReactProject';
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
          <div className="main-content">
            <Navbar />
            <DarkMode />
            <Routes>
              <Route path="/">
                <Route index exact element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="project" element={<ReactProject />} />
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
