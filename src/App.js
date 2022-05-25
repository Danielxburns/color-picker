import { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from './slider.comp';
import { RBGAContext } from './rgba.context';

function App() {
  const RGBAstate = useContext(RBGAContext);

  const { rval, gval, bval, aval } = RGBAstate;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const setter = `set${name[0].toUpperCase()}val`;
    /* console.log('setter :>> ', setter); */
    RGBAstate[setter](value);
    // update the background color of the viewer element
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>RGBA color</p>
        <div className="viewer-container">
          <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>{' '}
          <div
            className="viewer"
            style={{
              backgroundColor: `rgba(${rval}, ${gval}, ${bval}, ${aval})`,
            }}
          >
            <p>
              background-color: rgba({rval}, {gval}, {bval}, {aval})
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
      </header>
    </div>
  );
}

export default App;
