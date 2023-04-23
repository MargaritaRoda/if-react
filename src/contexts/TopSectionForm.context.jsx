import React, { createContext, useContext, useState } from 'react';

const TopSectionFormContext = createContext({
  checkInOut: [],
  setCheckInOut: (newCheckInOut) => {},
});
export const TopSectionFormContextProvider = ({ children }) => {
  const [checkInOut, setCheckInOut] = useState([]);

  return (
    <TopSectionFormContext.Provider value={{ checkInOut, setCheckInOut }}>
      {children}
    </TopSectionFormContext.Provider>
  );
};

export const useTopSectionFormContext = () => useContext(TopSectionFormContext);
