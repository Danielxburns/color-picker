import { createContext, useState } from 'react';

export const HSLAContext = createContext({
  hval: 0,
  sval: 0,
  lval: 0,
  aval: 0.0,
  setHval: () => null,
  setSval: () => null,
  setLval: () => null,
  setAval: () => null,
});

export const RGBAProvider = ({ children }) => {
  const [hval, setHval] = useState(255);
  const [sval, setSval] = useState(255);
  const [lval, setLval] = useState(255);
  const [aval, setAval] = useState(1);

  const value = { hval, setHval, sval, setSval, lval, setLval, aval, setAval };

  return <HSLAContext.Provider value={value}>{children}</HSLAContext.Provider>;
};
