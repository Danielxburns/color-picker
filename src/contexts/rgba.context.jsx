import { createContext, useState } from 'react';

const valNames = ['Red', 'Green', 'Blue', 'Alpha'];
const maxVals = ['255', '255', '255', '1.0'];
const defaultColorVals = {
  val1: '255',
  val2: '255',
  val3: '0',
  val4: '0.7',
};

export const RBGAContext = createContext({
  colorVals: {},
  setColorVals: () => {},
  valNames: [],
  maxVals: [],
});

export const RGBAProvider = ({ children }) => {
  const [colorVals, setColorVals] = useState(defaultColorVals);
  const value = { colorVals, setColorVals, valNames, maxVals };

  return <RBGAContext.Provider value={value}>{children}</RBGAContext.Provider>;
};
