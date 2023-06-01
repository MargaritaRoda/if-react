import React, { createContext, useContext, useRef } from 'react';

const AvailableHotelsScrollContext = createContext({
  current: null,
});
export const AvailableHotelsScrollContextProvider = ({ children }) => {
  const scrollRef = useRef(null);

  return (
    <AvailableHotelsScrollContext.Provider value={scrollRef}>
      {children}
    </AvailableHotelsScrollContext.Provider>
  );
};

export const useAvailableHotelsScrollContext = () =>
  useContext(AvailableHotelsScrollContext);
