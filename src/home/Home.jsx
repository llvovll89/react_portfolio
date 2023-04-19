import React from 'react';
import { Main } from '../components/main/Main';
import { About } from '../pages/about/About';
import { ReactProject } from '../pages/project/react/ReactProject';
import { Contact } from '../pages/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Arrow } from '../common/toparoow/Arrow';
import ProgressBar from '../common/Progressbar';

export const Home = () => {
  return (
    <>
      <ProgressBar />
      <Main />
      <About />
      <ReactProject />
      <Contact />
      <Arrow />
      <Footer />
    </>
  );
};
