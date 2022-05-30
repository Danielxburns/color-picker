import { useContext } from 'react';
import logo from '../assets/logo.svg';
import Slider from './slider.comp';
import { RBGAContext } from '../contexts/rgba.context';
//import { HSLAContext } from '../contexts/hsla.context';


const Picker = ({ colorModel, handleChange }) => {

  const { rval, gval, bval, aval } = useContext(RBGAContext);

  return (
    <div className="picker">
      {colorModel} color
      <div className="viewer-container">
        <div className="logo-container">
          <img src={logo} className="App-logo" alt="logo" />
        </div>{' '}
        <div
          className="viewer"
          style={{
            backgroundColor: `${colorModel}.toLowerCase()(${rval}, ${gval}, ${bval}, ${aval})`,
          }}
        >
          <p>
            background-color: {colorModel.toLowerCase()}({rval}, {gval}, {bval}, {aval})
          </p>
        </div>
      </div>
      <div className="slider-container">
        <Slider
          className="red"
          name="red"
          min="0"
          max="255"
          value={rval}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="green"
          name="green"
          min="0"
          max="255"
          value={gval}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="blue"
          name="blue"
          min="0"
          max="255"
          value={bval}
          handlechange={handleChange}
        ></Slider>
        <Slider
          className="alpha"
          name="alpha"
          min="0.0"
          max="1.0"
          step="0.1"
          value={aval}
          handlechange={handleChange}
        ></Slider>
      </div>
    </div>
  );
};

export default Picker;
