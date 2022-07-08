import { useContext } from 'react';
import { ImagesContext } from '../contexts/images.context';
import { ColorContext } from '../contexts/color.context';
import Controller from './controller.component';
import ImageSelector from './imageSelector.component';
import InitialValues from '../assets/intialValues';

const Picker = ({ colorModel }) => {
  const { fg, setFg, bg, setBg, images, setImages } = useContext(ImagesContext);

  const colorContext = useContext(ColorContext);
  const colorVals = colorContext[`${colorModel.toLowerCase()}Vals`];
  const setColorVals = colorContext[`set${colorModel}Vals`];
  const { val1, val2, val3, val4 } = colorVals;
  const { valNames, maxVals } = InitialValues[colorModel];

  const handleChange = (e) => {
    const { className, value } = e.target;
    setColorVals({ ...colorVals, [className]: value });
  };

  const addImage = () => {
    const imageURL = prompt("image URL");
    const imageName = prompt("name of image");
    setImages({ ...images, [imageName]: imageURL });
    setFg({name: imageName, url: imageURL});
  }

  return (
    <div className="picker">
      {colorModel} color
      <div className="viewer-container">
        <div className="background-layer">
          <img src={bg.url} className="image" alt={bg.name} />
        </div>{' '}
        <div
          className="color-layer"
          style={{
            backgroundColor: `${colorModel.toLowerCase()}(${val1}, ${
              colorModel === 'HSLA' ? val2 + '%' : val2
            }, ${colorModel === 'HSLA' ? val3 + '%' : val3}, ${val4})`,
          }}
        ></div>
        <div className="foreground-layer">
          {' '}
          <img src={fg.url} className="image" alt={fg.name} />
        </div>
      </div>
      <div className="controllers-container">
        <Controller
          className="val1"
          name={`${valNames[0]}`}
          min="0"
          max={`${maxVals[0]}`}
          value={val1}
          handlechange={handleChange}
        ></Controller>
        <Controller
          className="val2"
          name={`${valNames[1]}`}
          min="0"
          max={`${maxVals[1]}`}
          value={val2}
          handlechange={handleChange}
        ></Controller>
        <Controller
          className="val3"
          name={`${valNames[2]}`}
          min="0"
          max={`${maxVals[2]}`}
          value={val3}
          handlechange={handleChange}
        ></Controller>
        <Controller
          className="val4"
          name={`${valNames[3]}`}
          min="0.0"
          max={`${maxVals[3]}`}
          step="0.1"
          value={val4}
          handlechange={handleChange}
        ></Controller>
      </div>
      <div className="options-container">
        <ImageSelector
          className="fg-select"
          label="Foreground"
          imageName={fg.name}
          setter={setFg}
        />
        <ImageSelector
          className="bg-select"
          label="Background"
          imageName={bg.name}
          setter={setBg}
        />
        <button className='add-image' onClick={addImage}>Add your own Image</button>
      </div>
    </div>
  );
};

export default Picker;
