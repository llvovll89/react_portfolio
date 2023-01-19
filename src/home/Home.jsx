import React from 'react';
import { Main } from '../component/main/Main';
import { About } from '../pages/about/About';
import { VanilaJsProject } from '../pages/project/vanilajs/VanilaJsProject';
import { ReactProject } from '../pages/project/react/ReactProject';
import { Contact } from '../pages/contact/Contact';
import { Footer } from '../component/footer/Footer';
import { Arrow } from '../component/arrow/Arrow';

export const Home = () => {
  return (
    <>
      <Main />
      <About />
      <VanilaJsProject />
      <ReactProject />
      <Contact />
      <Arrow />
      <Footer />
    </>
  );
};
