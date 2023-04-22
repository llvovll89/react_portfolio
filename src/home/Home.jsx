import React from 'react';
import ProgressBar from '../common/Progressbar';
import { Main } from '../components/main/Main';
import { About } from '../pages/about/About';
import { Contact } from '../pages/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Arrow } from '../common/toparoow/Arrow';
import { Project } from '../pages/project/Project';
import AboutSection from '../components/aboutsection/AboutSection';

// <About />
export const Home = () => {
  return (
    <>
      <ProgressBar />
      <Main />
      <AboutSection />
      <Project />
      <Contact />
      <Arrow />
      <Footer />
    </>
  );
};
