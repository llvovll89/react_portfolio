import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [width, setWidth] = useState(null);
  
    const scrolling = () => {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (height > 0) {
          setWidth(`${scrolled}%`);
        } else {
          setWidth(null);
        }
      };
  
      useEffect(() => {
        try {
          window.addEventListener('scroll', scrolling);
        } catch (oError) {
          console.log(oError);
        }
    
        return () => {
          try {
            window.removeEventListener('scroll', scrolling);
          } catch (oError) {
            console.log(oError);
          }
        };
      }, []);
  
    return (
      <div
        className="progressbar"
        style={{
          height: '4px',
          backgroundColor: '#08f',
          transitionDuration: '0.1s',
          width: width,
          margin: 0,
          padding: 0,
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          transitionProperty: 'width',
          transitionTimingFunction: `ease-in-out`,
        }}
      />
    );
  };
  

export default ProgressBar;