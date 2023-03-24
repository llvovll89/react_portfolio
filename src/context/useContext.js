import React, { createContext, useState } from 'react';

export const UseContext = createContext();

export const UseItem = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [modal, setModal] = useState(false);

  // Project modal
  const modalOn = () => {
    setModal(!modal);
  }

  return (
    <UseContext.Provider value={{darkMode, setDarkMode, modalOn , modal}}>
      {children}
    </UseContext.Provider>
  );
};

// export default DarkContext