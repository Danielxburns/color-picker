import { useContext } from 'react';
import './App.css';
import Picker from './components/picker.component';
import { RBGAContext } from './contexts/rgba.context';

function App() {
  const RGBAstate = useContext(RBGAContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    const setter = `set${name[0].toUpperCase()}val`;
    /* console.log('setter :>> ', setter); */
    RGBAstate[setter](value);
    // update the background color of the viewer element
  };

  return (
    <div className="App">
      <p>Color Picker</p>
      <div className="picker-container">
        <Picker colorModel={'RGBA'} handleChange={handleChange} />
        <Picker colorModel={'HSLA'} handleChange={handleChange} />
      </div>
    </div>
  );
}

export default App;
