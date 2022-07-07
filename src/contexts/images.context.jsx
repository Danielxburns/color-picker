import { createContext, useState } from 'react';
import Images from '../assets/images/index.images';

export const ImagesContext = createContext({
  images: {},
  setImages: () => {},
  fg: {},
  setFg: () => {},
  bg: {},
  setBg: () => {},
});

export const ImagesProvider = ({ children }) => {
  const [fg, setFg] = useState({ name: 'none', url: Images.none });
  const [bg, setBg] = useState({
    name: 'rgb_circles',
    url: Images.rgb_circles,
  });
  const [images, setImages] = useState({ ...Images });
  const value = { fg, setFg, bg, setBg, images, setImages };

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  );
};
