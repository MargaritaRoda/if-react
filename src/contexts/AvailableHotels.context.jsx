import React, { createContext, useContext, useState } from 'react';

const AvailableHotelsContext = createContext({
  items: [],
  setItems: (newItems) => {},
});
export const AvailableHotelsContextProvider = ({ children }) => {
  const [availableHotels, setAvailableHotels] = useState([]);

  return (
    <AvailableHotelsContext.Provider
      value={{ items: availableHotels, setItems: setAvailableHotels }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
