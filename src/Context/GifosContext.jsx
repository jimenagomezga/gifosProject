import React, { useState, createContext } from "react";

export const GifosContext = createContext();

export const GifosProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  return (
    <GifosContext.Provider value={{ loading, setLoading, error, setError }}>
      {children}
    </GifosContext.Provider>
  );
};
