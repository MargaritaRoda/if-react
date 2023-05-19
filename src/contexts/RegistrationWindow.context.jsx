import React, { createContext, useContext, useState, useMemo } from 'react';

const RegistrationWindowContext = createContext({
  user: {
    email: '',
    password: '',
  },
  setUser: (newUser) => {},
});
export const RegistrationWindowContextProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const contextValue = useMemo(() => {
    return {
      user,
      setUser,
    };
  }, [user, setUser]);
  return (
    <RegistrationWindowContext.Provider value={contextValue}>
      {children}
    </RegistrationWindowContext.Provider>
  );
};

export const useRegistrationWindowContext = () =>
  useContext(RegistrationWindowContext);
