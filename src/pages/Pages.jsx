import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { About } from './about/About';
import { Asidecontent } from '../component/aside/Asidecontent';
import { VanilaJsProject } from './project/vanilajs/VanilaJsProject';
import { ReactProject } from './project/react/ReactProject';
import { Contact } from './contact/Contact';
import { Randingpage } from '../component/randingpage/Randingpage';

export const Pages = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Asidecontent />
        <Routes>
          <Route path="/" element={<Randingpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vanilajs" element={<VanilaJsProject />} />
          <Route path="/react" element={<ReactProject />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/randing" element={<Randingpage />} />
        </Routes>
      </Router>
    </>
  );
};
