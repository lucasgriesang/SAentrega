import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  const addCliente = (novoCliente) => {
    setClientes([...clientes, novoCliente]);
  };

  return (
    <GlobalContext.Provider value={{ clientes, addCliente }}>
      {children}
    </GlobalContext.Provider>
  );
};
