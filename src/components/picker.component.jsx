import { useState, useContext } from 'react';
import Images from '../assets/images/index.images';
import InitialValues from '../assets/intialValues';
import Controller from './controller';
import ImageSelector from './imageSelector.component';
import { ColorContext } from '../contexts/color.context';

const Picker = ({ colorModel }) => {
  const [BGimage, setBGImage] = useState({
    name: 'rgb_circles',
    url: Images.rgb_circles,
  });
  const [FGimage, setFGImage] = useState({ name: 'none', url: Images.none });

  const context = useContext(ColorContext);
  const colorVals = context[`${colorModel.toLowerCase()}Vals`];
  const setColorVals = context[`set${colorModel}Vals`];
  const { val1, val2, val3, val4 } = colorVals;
  const { valNames, maxVals } = InitialValues[colorModel];

  const handleChange = (e) => {
    const { className, value } = e.target;
    setColorVals({ ...colorVals, [className]: value });
  };

  return (
    <div className="picker">
      {colorModel} color
      <div className="viewer-container">
        <div className="background-layer">
          <img src={BGimage.url} className="image" alt={BGimage.name} />
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
          <img src={FGimage.url} className="image" alt={FGimage.name} />
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
          imageName={FGimage.name}
          setter={setFGImage}
        />
        <ImageSelector
          className="bg-select"
          label="Background"
          imageName={BGimage.name}
          setter={setBGImage}
        />
      </div>
    </div>
  );
};

export default Picker;
