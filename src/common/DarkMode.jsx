import React, { useContext } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { DarkContext } from '../context/darkContext';

export const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const containerStyles = {
    background: darkMode ? '#FFF' : '#000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5px', 
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
    <div
      className="dark_container"
      onClick={handleClick}
      style={containerStyles}
    >
      {darkMode ? (
        <>
          <CiLight style={iconStyles} />
          <span style={textStyles}>Light</span>
        </>
      ) : (
        <>
          <CiDark style={iconStyles} />
          <span style={textStyles}>Dark</span>
        </>
      )}
    </div>
  );
};
