import Images from '../assets/images/index.images';

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
        {Object.keys(Images).map(key=>
          <option value={key} key={key}>{key}</option>
        )}
      </select>
    </div>
  );
};

export default ImageSelector;
