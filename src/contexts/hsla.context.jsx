import { createContext, useState } from 'react';

const defaultColorVals = {
  val1: 0,
  val2: 0,
  val3: 0,
  val4: 0.0
}

export const HSLAContext = createContext({
  colorVals: {},
  setColorVals: () => {},
  valNames: ['Hue', 'Saturation', 'Lightness', 'Alpha'],
  maxVals: [360,100,100,1.0],
});

export const HSLAProvider = ({ children }) => {
  const [colorVals, setColorVals] = useState(defaultColorVals);
  const [valNames, setValNames] = useState(['Hue', 'Saturation', 'Lightness', 'Alpha']);
  const [maxVals, setMaxVals] = useState([360,100,100,1.0])

  const value = { colorVals, setColorVals, valNames, setValNames, maxVals, setMaxVals };

  return <HSLAContext.Provider value={value}>{children}</HSLAContext.Provider>;
};
