import './index.css';
import React, { useEffect } from 'react';
import { Pages } from './pages/Pages';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { UseItem } from './context/useContext';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  return (
    <>
    <UseItem>
        <Pages />
        </UseItem>
    </>
  );
}

export default App;
