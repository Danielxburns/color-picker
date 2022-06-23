import Images from '../assets/images/index';

const ImageSelector = ({ className, label, imageName, setter }) => {
  return (
    <div>
      <label htmlFor={className}>{label}:</label>
      <select
        className={className}
        name={className}
        value={imageName}
        onChange={(e) => {
          setter({ name: e.target.value, url: Images[e.target.value] });
        }}
      >
        <option value="none">None</option>
        <optgroup label="Images">
          <option value="rgb_circles">RGB circles</option>
          <option value="colorwheel">Color wheel</option>
          <option value="dad">Dad</option>
        </optgroup>
        <optgroup label="Textures">
          <option value="droplets">Droplets</option>
          <option value="brick">Brick</option>
          <option value="smoke">Smoke</option>
          <option value="topography">Topography</option>
          <option value="ripple">Ripple</option>
        </optgroup>
      </select>
    </div>
)};

export default ImageSelector;
