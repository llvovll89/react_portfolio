import './index.css';
import React, { useEffect } from 'react';
import { Pages } from './pages/Pages';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
