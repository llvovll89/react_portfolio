import React, { useContext } from 'react';
import { CiDark, CiLight } from 'react-icons/ci';
import { UseContext } from '../../context/useContext';

export const Darkmode = () => {
  const [darkMode, setDarkMode] = useContext(UseContext);

  const handelClick = () => {
    setDarkMode(!false);
    if (darkMode !== false) {
      setDarkMode(false);
    }
  };

  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="dark_container"
        onClick={handelClick}
        style={{
          background: darkMode ? '#FFF' : '#000',
        }}
      >
        <span
          className="dark_dark"
          style={{ color: darkMode ? '#121111' : '#FFF' }}
        >
          {darkMode ? <CiLight /> : <CiDark />}
        </span>
      </div>
    </>
  );
};
