import { createContext, useState } from 'react';

export const HSLAContext = createContext({
  val1: 0,
  val2: 0,
  val3: 0,
  val4: 0.0,
  setVal1: () => null,
  setVal2: () => null,
  setVal3: () => null,
  setVal4: () => null,
  valNames: ['Hue', 'Saturation', 'Lightness', 'Alpha'],
  maxVals: [360,100,100,1.0],
});

export const HSLAProvider = ({ children }) => {
  const [val1, setVal1] = useState(360);
  const [val2, setVal2] = useState(100);
  const [val3, setVal3] = useState(100);
  const [val4, setVal4] = useState(1);
  const [valNames, setValNames] = useState(['Hue', 'Saturation', 'Lightness', 'Alpha']);
  const [maxVals, setMaxVals] = useState([360,100,100,1.0])

  const value = { val1, setVal1, val2, setVal2, val3, setVal3, val4, setVal4, valNames, setValNames, maxVals, setMaxVals };

  return <HSLAContext.Provider value={value}>{children}</HSLAContext.Provider>;
};
