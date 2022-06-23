const Slider = ({ className, name, min, max, step, value, handlechange }) => {
  
  const increment = () => {
    value = parseFloat(value);
    if (value >= min && value < max) {
      return className === 'val4'
        ? (value + 0.1).toFixed(1)
        : value + 1;
    } else {
      return value;
    }
  };

  const decrement = () => {
    value = parseFloat(value);
    if (value > min && value <= max) {
      return className === 'val4'
        ? (value - 0.1).toFixed(1)
        : value - 1;
    } else {
      return value;
    }
  };

  return (
    <div className="slider-wrapper">
      <label
        htmlFor={name}
        id={'label-for-' + name}
        style={{ display: 'block' }}
      >
        {name}:{' '}
      </label>
      <input
        type="range"
        className={className}
        id={name}
        name={name}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handlechange}
      ></input>
      <div className="slider-val-wrapper">
        <button
          className={className}
          value={decrement()}
          onClick={handlechange}
        >
          &#10094;
        </button>
        <input
          type="text"
          id={name + 'Val'}
          className={className}
          value={value}
          onChange={handlechange}
        ></input>
        <button
          className={className}
          value={increment()}
          onClick={handlechange}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Slider;
