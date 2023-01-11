import React from 'react';
import { About } from '../component/about/About';
import { Arrow } from '../component/arrow/Arrow';
// import { Backend } from '../component/back/Backend';
import { Contact } from '../component/contact/Contact';
import { Footer } from '../component/footer/Footer';
import { Main } from '../component/main/Main';
import { BackProject } from '../component/pro/BackProject';
import { JsProject } from '../component/project/jsproject/JsProject';
import { ReactProject } from '../component/project/reactproject/ReactProject';
// <Backend />

export const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <Main />
          <About />
          <ReactProject />
          <JsProject />
          <BackProject />
          <Contact />
          <Arrow />
          <Footer />
        </div>
      </div>
    </>
  );
};
