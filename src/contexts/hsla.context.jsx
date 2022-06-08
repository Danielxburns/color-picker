import { createContext, useState } from 'react';

const valNames = ['Hue', 'Saturation', 'Lightness', 'Alpha'];
const maxVals = ['360', '100', '100', '1.0'];
const defaultColorVals = {
  val1: '60',
  val2: '100',
  val3: '50',
  val4: '0.7',
};

export const HSLAContext = createContext({
  colorVals: {},
  setColorVals: () => {},
  valNames: [],
  maxVals: [],
});

export const HSLAProvider = ({ children }) => {
  const [colorVals, setColorVals] = useState(defaultColorVals);
  const value = { colorVals, setColorVals, valNames, maxVals };
  
  return <HSLAContext.Provider value={value}>{children}</HSLAContext.Provider>;
};
