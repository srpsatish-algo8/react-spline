import './App.css';
import Spline from '@splinetool/react-spline';

function App() {
  function onMouseDown(e) {
    if (e.target.name === 'Cube') {
      console.log('I have been clicked!');
    }
  }
  return (
    <div className="App">
     <Spline scene="https://prod.spline.design/IjCqedQOi8DWEnrA/scene.splinecode" onMouseDown={onMouseDown} />
    </div>
  );
}

export default App;
