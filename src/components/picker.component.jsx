import { useContext } from 'react';
import logo from '../assets/logo.svg';
import Slider from './slider.comp';
import { RBGAContext } from '../contexts/rgba.context';
import { HSLAContext } from '../contexts/hsla.context';

const Picker = ({ colorModel }) => {
  const RGBA_Ctxt = useContext(RBGAContext);
  const HSLA_Ctxt = useContext(HSLAContext);

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
          <img src={logo} className="App-logo" alt="logo" />
        </div>{' '}
        <div
          className="viewer-layer"
          style={{
            backgroundColor: `${colorModel.toLowerCase()}(${val1}, ${
              colorModel === 'HSLA' ? val2 + '%' : val2
            }, ${colorModel === 'HSLA' ? val3 + '%' : val3}, ${val4})`,
          }}
        >
          <p>
            background-color: {colorModel.toLowerCase()}({val1},{' '}
            {colorModel === 'HSLA' ? val2 + '%' : val2},{' '}
            {colorModel === 'HSLA' ? val3 + '%' : val3}, {val4})
          </p>
        </div>
        <div className="foreground-layer"></div>
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
    </div>
  );
};

export default Picker;
