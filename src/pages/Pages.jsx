import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from '../component/about/About';
import { Asidecontent } from '../component/aside/Asidecontent';
import { Backend } from '../component/back/Backend';
import { Contact } from '../component/contact/Contact';
import { Footer } from '../component/footer/Footer';
import { JsProject } from '../component/project/jsproject/JsProject';
import { ReactProject } from '../component/project/reactproject/ReactProject';
import { Randingpage } from '../component/randingpage/Randingpage';
import { Home } from '../home/Home';
// <Footer />
export const Pages = () => {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Asidecontent />
        <Routes>
          <Route path="/" element={<Randingpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/react" element={<ReactProject />} />
          <Route path="/javascript" element={<JsProject />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/randing" element={<Randingpage />} />
        </Routes>
      </Router>
    </>
  );
};
