import { useContext } from 'react';
import logo from '../assets/logo.svg';
import Slider from './slider.comp';
import { RBGAContext } from '../contexts/rgba.context';
import { HSLAContext } from '../contexts/hsla.context';


const Picker = ({ colorModel }) => {

  const RGBA_Ctxt = useContext(RBGAContext);
  const HSLA_Ctxt = useContext(HSLAContext);

  const context = (colorModel === 'RGBA') ? RGBA_Ctxt: HSLA_Ctxt;

  const handleChange = (e) => {
    const { className, value } = e.target;
    console.log(className, value);
    const setter = `setV${className.slice(1)}`;
    console.log('setter :>> ', setter);
    context[setter](value);
    // update the background color of the viewer element
  };

  console.log(`${colorModel} context :>> `, context);

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
            backgroundColor: `${colorModel.toLowerCase()}(${context.val1}, ${(colorModel === 'HSLA')? context.val2 + '%': context.val2}, ${(colorModel === 'HSLA')? context.val3 + '%': context.val3}, ${context.val4})`
          }}
        >
          <p>
            background-color: {colorModel.toLowerCase()}({context.val1}, {context.val2}, {context.val3}, {context.val4})
          </p>
        </div>
        <div className='foreground-layer'></div>
      </div>
      <div className="slider-container">
        <Slider
          className="val1"
          name={`${context.valNames[0]}`}
          min="0"
          max={`${context.maxVals[0]}`}
          value={context.val1}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="val2"
          name={`${context.valNames[1]}`}
          min="0"
          max={`${context.maxVals[1]}`}
          value={context.val2}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="val3"
          name={`${context.valNames[2]}`}
          min="0"
          max={`${context.maxVals[2]}`}
          value={context.val3}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="val4"
          name={`${context.valNames[3]}`}
          min="0.0"
          max={`${context.maxVals[3]}`}
          step="0.1"
          value={context.val4}
          handlechange={handleChange}
        ></Slider>
      </div>
    </div>
  );
};

export default Picker;
