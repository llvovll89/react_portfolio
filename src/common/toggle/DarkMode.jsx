import React, { useContext } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { DarkContext } from '../../context/darkContext';
import './DarkMode.css'

export const DarkMode = () => {
  const { darkMode, setDarkMode } = useContext(DarkContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const containerStyles = {
    background: darkMode ? '#231f20' : '#FFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2.5px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.16)',
  };

  const iconStyles = {
    color: darkMode ? '#FFFFFF' : '#231f20',
  };

  const textStyles = {
    color: darkMode ? '#FFFFFF' : '#231f20',
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
          <CiDark style={iconStyles} />
          <span style={textStyles}>Dark</span>
        </>
      ) : (
        <>
          <CiLight style={iconStyles} />
          <span style={textStyles}>Light</span>
        </>
      )}
    </div>
  );
};
