import React, { createContext, useContext, useState, useMemo } from 'react';

const TopSectionFormContext = createContext({
  adultsCount: 1,
  setAdultsCount: (newAdultsCount) => {},
  childrenCount: 0,
  setChildrenCount: (newChildrenCount) => {},
  roomsCount: 1,
  setRoomsCount: (newRoomsCount) => {},
  childrenAges: [],
  setChildrenAges: (newChildrenAges) => {},
  checkInOut: [],
  setCheckInOut: (newCheckInOut) => {},
});
export const TopSectionFormContextProvider = ({ children }) => {
  const [checkInOut, setCheckInOut] = useState([]);
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [roomsCount, setRoomsCount] = useState(1);
  const [childrenAges, setChildrenAges] = useState([]);

  const contextValue = useMemo(() => {
    return {
      checkInOut,
      setCheckInOut,
      adultsCount,
      setAdultsCount,
      childrenCount,
      setChildrenCount,
      roomsCount,
      setRoomsCount,
      childrenAges,
      setChildrenAges,
    };
  }, [
    checkInOut,
    setCheckInOut,
    adultsCount,
    setAdultsCount,
    childrenCount,
    setChildrenCount,
    roomsCount,
    setRoomsCount,
    childrenAges,
    setChildrenAges,
  ]);

  return (
    <TopSectionFormContext.Provider value={contextValue}>
      {children}
    </TopSectionFormContext.Provider>
  );
};

export const useTopSectionFormContext = () => useContext(TopSectionFormContext);
