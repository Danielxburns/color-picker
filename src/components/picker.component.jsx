import { useState, useContext } from 'react';
import Images from '../assets/images/index';
import Slider from './slider.comp';
import { RBGAContext } from '../contexts/rgba.context';
import { HSLAContext } from '../contexts/hsla.context';

const Picker = ({ colorModel }) => {
  const [BGimage, setBGImage] = useState({ name: 'logo', url: Images.logo });
  const [FGimage, setFGImage] = useState({ name: 'none', url: Images.none });
  const RGBA_Ctxt = useContext(RBGAContext);
  const HSLA_Ctxt = useContext(HSLAContext);

  // need a better way to do this
  const context = colorModel === 'RGBA' ? RGBA_Ctxt : HSLA_Ctxt;

  const { colorVals, setColorVals, valNames, maxVals } = context;
  const { val1, val2, val3, val4 } = colorVals;

  const handleChange = (e) => {
    const { className, value } = e.target;
    setColorVals({ ...colorVals, [className]: value });
  };

  return (
    <div className="picker">
      {colorModel} color
      <div className="viewer-container">
        <div className="background-layer">
          <img src={BGimage.url} className="bg-image" alt="background" />
        </div>{' '}
        <div
          className="color-layer"
          style={{
            backgroundColor: `${colorModel.toLowerCase()}(${val1}, ${
              colorModel === 'HSLA' ? val2 + '%' : val2
            }, ${colorModel === 'HSLA' ? val3 + '%' : val3}, ${val4})`,
          }}
        >
          <p>
            CSS color: {colorModel.toLowerCase()}({val1},{' '}
            {colorModel === 'HSLA' ? val2 + '%' : val2},{' '}
            {colorModel === 'HSLA' ? val3 + '%' : val3}, {val4})
          </p>
        </div>
        <div className="foreground-layer">
          {' '}
          <img src={FGimage.url} className="fg-image" alt="foreground" />
        </div>
      </div>
      <div className="sliders-container">
        <Slider
          className="val1"
          name={`${valNames[0]}`}
          min="0"
          max={`${maxVals[0]}`}
          value={val1}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="val2"
          name={`${valNames[1]}`}
          min="0"
          max={`${maxVals[1]}`}
          value={val2}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="val3"
          name={`${valNames[2]}`}
          min="0"
          max={`${maxVals[2]}`}
          value={val3}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="val4"
          name={`${valNames[3]}`}
          min="0.0"
          max={`${maxVals[3]}`}
          step="0.1"
          value={val4}
          handlechange={handleChange}
        ></Slider>
      </div>
      <div className="options-container">
        <label htmlFor="fg-select">Foreground:</label>
        <select
          className="fg-select"
          name="fg-select"
          value={FGimage.name}
          onChange={(e) => {
            setFGImage({ name: e.target.value, url: Images[e.target.value] });
          }}
        >
          <option value="none">None</option>
          <option value="brick">Brick</option>
          <option value="colorTheory">RGB circles</option>
          <option value="colorWheel">Color wheel</option>
          <option value="dad">Dad</option>
          <option value="droplets">Droplets</option>
          <option value="logo">React Logo</option>
          <option value="ripple">Ripple</option>
          <option value="smoke">Smoke</option>
          <option value="topography">Topography</option>
        </select>
        <label htmlFor="bg-select">Background:</label>
        <select
          className="bg-select"
          name="bg-select"
          value={BGimage.name}
          onChange={(e) => {
            setBGImage({ name: e.target.value, url: Images[e.target.value] });
          }}
        >
          <option value="none">None</option>
          <option value="brick">Brick</option>
          <option value="colorTheory">RGB circles</option>
          <option value="colorWheel">Color wheel</option>{' '}
          <option value="dad">Dad</option>
          <option value="droplets">Droplets</option>
          <option value="logo">React Logo</option>
          <option value="ripple">Ripple</option>
          <option value="smoke">Smoke</option>
          <option value="topography">Topography</option>
        </select>
      </div>
    </div>
  );
};

export default Picker;
