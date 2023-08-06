import './App.css';
import { Button } from './components/Button'
import React from 'react';

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
        <div className='App-grid'>
          <Button label = {"Barbie"} style = {barbieButton}/>
          <Button label = {"Oppenheimer"} style = {oppenheimerButton} />
        </div>
      </header>
    </div>
  );
}

const oppenheimerButton = {
  backgroundColor: "black",
  color: "white",
  width: 100,
  height: 50,
  borderRadius: 100
};

const barbieButton = {
  backgroundColor: "pink",
  color: "black",
  width: 100,
  height: 50,
  borderRadius: 100
};

export default App;
