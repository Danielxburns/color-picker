import { createContext, useState } from 'react';

export const RBGAContext = createContext({
  val1: 0,
  val2: 0,
  val3: 0,
  val4: 0.0,
  setVal1: () => null,
  setVal2: () => null,
  setVal3: () => null,
  setVal4: () => null,
  valNames: ['Red', 'Green', 'Blue', 'Alpha'],
  maxVals: [255,255,255,1.0],
});

export const RGBAProvider = ({ children }) => {
  const [val1, setVal1] = useState(255);
  const [val2, setVal2] = useState(255);
  const [val3, setVal3] = useState(255);
  const [val4, setVal4] = useState(1);
  const [valNames, setValNames] = useState(['Red', 'Green', 'Blue', 'Alpha']);
  const [maxVals, setMaxVals] = useState([255,255,255,1.0])

  const value = { val1, setVal1, val2, setVal2, val3, setVal3, val4, setVal4, valNames, setValNames, maxVals, setMaxVals };

  return <RBGAContext.Provider value={value}>{children}</RBGAContext.Provider>;
};
