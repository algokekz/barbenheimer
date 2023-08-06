import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Click for your favorite movie: Barbie or Oppenheimer!!!
        </p>
        <div className='App-column'>
        <img src={require("./assets/barbie_poster.png")} className="App-logo" alt="barbie" />
        <img src={require("./assets/oppenheimer_poster.png")} className="App-logo" alt="oppenheimer" />
        </div>
      </header>
    </div>
  );
}

export default App;
