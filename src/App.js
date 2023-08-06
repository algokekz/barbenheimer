import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Click for your favorite movie: Barbie or Oppenheimer
        </p>
        <img src={require("./assets/barbie_poster.png")} className="App-logo" alt="barbie" />
        <img src={require("./assets/oppenheimer_poster.png")} className="App-logo" alt="oppenheimer" />
      
      </header>
    </div>
  );
}

export default App;
