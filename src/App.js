import React, { useEffect } from 'react';
import { Pages } from './pages/Pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { DarkContextProvider } from './context/darkContext';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      <DarkContextProvider>
        <Pages />
      </DarkContextProvider>
    </>
  );
}

export default App;
