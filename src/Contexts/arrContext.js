import React, { createContext, useState } from "react";

export const ArrContext = createContext(null);

export const ArrContextProvider = ({ children }) => {
  const [arr, setArr] = useState([]);

  return (
    <ArrContext.Provider value={{ arr, setArr }}>
      {children}
    </ArrContext.Provider>
  );
};
