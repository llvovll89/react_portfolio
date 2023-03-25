import React, { useEffect } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import './Arrow.css';

export const Arrow = () => {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollArrow = document.querySelector('.arrow');
      if (window.scrollY >= 560) {
        scrollArrow.classList.add('arrow-show');
      } else {
        scrollArrow.classList.remove('arrow-show');
      }
    });
  }, []);

  const topClick = () => {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <>
      <div className="arrow" onClick={topClick}>
        <SlArrowUp className="arrow-icon" />
      </div>
    </>
  );
};
