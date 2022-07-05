import { createContext, useState } from 'react';
import InitialValues from '../assets/intialValues';

export const ColorContext = createContext({
  rgbaVals: {},
  setRBGAVals: () => {},
  hslaVals: {},
  setHSLAVals: () => {},
});

export const ColorProvider = ({ children }) => {
  const [rgbaVals, setRGBAVals] = useState(InitialValues.RGBA.defaultColorVals);
  const [hslaVals, setHSLAVals] = useState(InitialValues.HSLA.defaultColorVals);
  const value = { rgbaVals, setRGBAVals, hslaVals, setHSLAVals };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};
