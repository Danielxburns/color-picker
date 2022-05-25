import { createContext, useState } from 'react';

export const RBGAContext = createContext({
  rval: 0,
  gval: 0,
  bval: 0,
  aval: 0.0,
  setRval: () => null,
  setGval: () => null,
  setBval: () => null,
  setAval: () => null,
});

export const RGBAProvider = ({ children }) => {
  const [rval, setRval] = useState(255);
  const [gval, setGval] = useState(255);
  const [bval, setBval] = useState(255);
  const [aval, setAval] = useState(1);

  const value = { rval, setRval, gval, setGval, bval, setBval, aval, setAval };

  return <RBGAContext.Provider value={value}>{children}</RBGAContext.Provider>;
};
