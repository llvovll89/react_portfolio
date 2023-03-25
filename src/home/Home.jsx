import React from 'react';
import { Main } from '../components/main/Main';
import { About } from '../pages/about/About';
// import { VanilaJsProject } from '../pages/project/vanilajs/VanilaJsProject';
import { ReactProject } from '../pages/project/react/ReactProject';
import { Contact } from '../pages/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Arrow } from '../components/toggle/toparoow/Arrow';

export const Home = () => {
  return (
    <>
      <Main />
      <About />
      {/* <VanilaJsProject /> */}
      <ReactProject />
      <Contact />
      <Arrow />
      <Footer />
    </>
  );
};
