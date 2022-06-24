import './App.css';
import Picker from './components/picker.component';

function App() {

  return (
    <div className="App">
      <p>Transparency Color Picker</p>
      <div className="picker-container">
        <Picker colorModel={'RGBA'}/>
        <Picker colorModel={'HSLA'}/>
      </div>
    </div>
  );
}

export default App;
