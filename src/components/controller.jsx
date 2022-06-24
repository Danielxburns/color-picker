const Controller = ({ className, name, min, max, step, value, handlechange }) => {
  const increment = () => {
    value = parseFloat(value);
    if (value >= min && value < max) {
      return className === 'val4' ? (value + 0.1).toFixed(1) : value + 1;
    } else {
      return value;
    }
  };

  const decrement = () => {
    value = parseFloat(value);
    if (value > min && value <= max) {
      return className === 'val4' ? (value - 0.1).toFixed(1) : value - 1;
    } else {
      return value;
    }
  };

  return (
    <div className="controller-wrapper">
      <label
        htmlFor={name}
        id={'label-for-' + name}
        style={{ display: 'block' }}
      >
        {name[0]}:{' '}
      </label>
      <input
        type="text"
        id={name + 'Val'}
        className={className}
        value={value}
        onChange={handlechange}
      ></input>
      <div className="button-wrapper">
        <button
          className={className}
          value={increment()}
          onClick={handlechange}
        >
          &#9650;
        </button>
        <button
          className={className}
          value={decrement()}
          onClick={handlechange}
        >
          &#9660;
        </button>
      </div>
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
    </div>
  );
};

export default Controller;
