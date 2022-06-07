import { createContext, useState } from 'react';

const defaultColorVals = {
  val1: 0,
  val2: 0,
  val3: 0,
  val4: 0.0
}

export const RBGAContext = createContext({
  colorVals: {},
  setColorVals: () => {},
  valNames: ['Red', 'Green', 'Blue', 'Alpha'],
  maxVals: [255,255,255,1.0],
});

export const RGBAProvider = ({ children }) => {
  const [colorVals, setColorVals] = useState(defaultColorVals);
  const [valNames, setValNames] = useState(['Red', 'Green', 'Blue', 'Alpha']);
  const [maxVals, setMaxVals] = useState([255,255,255,1.0])

  const value = { colorVals, setColorVals,/* val1, setVal1, val2, setVal2, val3, setVal3, val4, setVal4, */ valNames, setValNames, maxVals, setMaxVals };

  return <RBGAContext.Provider value={value}>{children}</RBGAContext.Provider>;
};
