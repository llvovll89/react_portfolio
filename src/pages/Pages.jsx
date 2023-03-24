import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { About } from './about/About';
import { Asidecontent } from '../components/aside/Asidecontent';
import { ReactProject } from './project/react/ReactProject';
import { Contact } from './contact/Contact';
import { Randingpage } from '../components/randingpage/Randingpage';
import { Darkmode } from '../components/arrow/Darkmode';

// project 통합을 위해 뺴놓은 project 주석처리
// import { VanilaJsProject } from './project/vanilajs/VanilaJsProject';

export const Pages = () => {
  return (
    <>
    <Router basename="react_portfolio">
    <div className="main-container">
    <div className="main-content">
    <Asidecontent />
    <Darkmode />
            <Routes>
            <Route path="/" element={<Randingpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/*<Route path="/vanilajs" element={<VanilaJsProject />} /> */}
              <Route path="/project" element={<ReactProject />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
};
