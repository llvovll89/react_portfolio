import React from 'react';
import { About } from '../component/about/About';
import { Arrow } from '../component/arrow/Arrow';
import { Asidecontent } from '../component/aside/Asidecontent';
import { Backend } from '../component/back/Backend';
import { Contact } from '../component/contact/Contact';
import { Main } from '../component/main/Main';
import { JsProject } from '../component/project/jsproject/JsProject';
import { ReactProject } from '../component/project/reactproject/ReactProject';


export const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <Main />
          <About />
          <JsProject />
          <ReactProject />
          <Backend />
          <Contact />
          <Arrow />
        </div>
      </div>
    </>
  );
};