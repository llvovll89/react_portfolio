import React from 'react';
import ProgressBar from '../common/Progressbar';
import { Main } from '../components/main/Main';
import { Contact } from '../pages/contact/Contact';
import { Footer } from '../components/footer/Footer';
import { Arrow } from '../common/toparoow/Arrow';
import AboutSection from '../components/aboutsection/AboutSection';
import Projects from '../components/projects/Projects';
import { DarkMode } from '../common/toggle/DarkMode';

export const Home = () => {
  return (
    <>
      <ProgressBar />
      <Main />
      <AboutSection />
      <Projects />
      <Contact />
      <DarkMode />
      <Arrow />
      <Footer />
    </>
  );
};
