import React, { createContext, useState } from 'react';

export const UseContext = createContext();

export const UseItem = (props) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <UseContext.Provider value={[darkMode, setDarkMode]}>
      {props.children}
    </UseContext.Provider>
  );
};
