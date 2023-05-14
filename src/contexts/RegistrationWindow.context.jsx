import React, { createContext, useContext, useState, useMemo } from 'react';

const RegistrationWindowContext = createContext({
  email: '',
  setEmail: (newEmail) => {},
  password: '',
  setPassword: (newName) => {},
});
export const RegistrationWindowContextProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const contextValue = useMemo(() => {
    return {
      password,
      setPassword,
      email,
      setEmail,
    };
  }, [password, setPassword, email, setEmail]);
  console.log(contextValue);
  return (
    <RegistrationWindowContext.Provider value={contextValue}>
      {children}
    </RegistrationWindowContext.Provider>
  );
};

export const useRegistrationWindowContext = () =>
  useContext(RegistrationWindowContext);
