import './App.css';
import Picker from './components/picker.component';
import { ImagesProvider } from './contexts/images.context';

function App() {
  return (
    <div className="App">
      <p>Daniel's Color Tool</p>
      <div className="picker-container">
        <ImagesProvider>
          <Picker colorModel={'RGBA'} />
        </ImagesProvider>
        <ImagesProvider>
          <Picker colorModel={'HSLA'} />
        </ImagesProvider>
      </div>
    </div>
  );
}

export default App;
