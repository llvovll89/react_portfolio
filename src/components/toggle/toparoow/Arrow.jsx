import React, { useContext } from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { DarkContext } from '../../../context/darkContext';
import './Arrow.css';

export const Arrow = () => {
  const { darkMode } = useContext(DarkContext);

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerStyles = {
    background: darkMode ? '#FFF' : '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '4px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.16)',
  };

  const iconStyles = {
    color: darkMode ? '#121111' : '#FFF',
  };

  const textStyles = {
    color: darkMode ? '#121111' : '#FFF',
    fontWeight: 'bold',
  };

  return (
    <>
      <div className="arrow" onClick={handleArrowClick} style={containerStyles}>
        {darkMode ? (
          <>
            <SlArrowUp className="arrow-icon" style={iconStyles} />
            <span style={textStyles}>Top</span>
          </>
        ) : (
          <>
            <SlArrowUp className="arrow-icon" style={iconStyles} />
            <span style={textStyles}>Top</span>
          </>
        )}
      </div>
    </>
  );
};
