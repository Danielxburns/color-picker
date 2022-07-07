import { useContext } from 'react';
import { ImagesContext } from '../contexts/images.context';

const ImageSelector = ({ className, label, imageName, setter }) => {
  const { images } = useContext(ImagesContext);

  const handleImageChange = (e) => {
    setter({ name: e.target.value, url: images[e.target.value] });
  };

  return (
    <div>
      <label htmlFor={className}>{label}:</label>
      <select
        className={className}
        name={className}
        value={imageName}
        onChange={handleImageChange}
      >
        {Object.keys(images).map((key) => (
          <option value={key} key={key}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ImageSelector;
