import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { About } from './about/About';
import { Asidecontent } from '../components/aside/Asidecontent';
import { ReactProject } from './project/react/ReactProject';
import { Contact } from './contact/Contact';
import { DarkMode } from '../components/toggle/darkmode/DarkMode';

// import { Randingpage } from '../components/randingpage/Randingpage';
// <Route path="/" element={<Randingpage />} />

export const Pages = () => {
  return (
    <>
      <Router basename="react_portfolio">
        <div className="main-content">
          <Asidecontent />
          <DarkMode />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<ReactProject />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
