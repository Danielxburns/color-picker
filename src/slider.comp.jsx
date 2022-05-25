import React from 'react';

const Slider = ({ name, min, max, step, value, handlechange}) => {

  return (
    <div className="sliderWrapper">
      <label htmlFor={name} id={'label-for-' + name} style={{display: 'block'}}>
        {name}:{' '}
      </label>
      <input
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handlechange}
      ></input>
      <div id={name + 'Val'}>
      {value}
    </div>
    </div>
  );
};

export default Slider;
