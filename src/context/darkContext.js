import React, { createContext, useState } from 'react';

export const DarkContext = createContext();

export const DarkContextProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(false);

  // Project modal
  const modalOn = () => {
    setModal(!modal);
  }

  return (
    <DarkContext.Provider value={{darkMode, setDarkMode, modalOn , modal}}>
      {children}
    </DarkContext.Provider>
  );
};