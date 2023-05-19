import React, { createContext, useContext, useRef, useState } from 'react';

const AvailableHotelsContext = createContext({
  hotelsDataFilter: null,
  setHotelsDataFilter: (hotelsDataFilter) => {},
  scrollRef: {
    current: null,
  },
});
export const AvailableHotelsContextProvider = ({ children }) => {
  const [hotelsDataFilter, setHotelsDataFilter] = useState(null);
  const scrollRef = useRef(null);

  return (
    <AvailableHotelsContext.Provider
      value={{
        scrollRef,
        hotelsDataFilter,
        setHotelsDataFilter,
      }}
    >
      {children}
    </AvailableHotelsContext.Provider>
  );
};

export const useAvailableHotelsContext = () =>
  useContext(AvailableHotelsContext);
