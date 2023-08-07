import './App.css';
import { Button } from './components/Button'
import { Counter } from './components/Counter'
import React from 'react';


function App() {
  /*setTimeout(() => { 
    window.location.reload(); 
  }, 5000);*/
  return (
    <div className="App">
      <header className="App-header">
        <p>
        Click for your favorite movie: Barbie or Oppenheimer!!!
        </p>
        <div className='App-grida'>
          <img src={require("./assets/barbie_poster.png")} className="App-logo" alt="barbie" />
          <img src={require("./assets/oppenheimer_poster.png")} className="App-logo" alt="oppenheimer" />
        </div>
        <div className='App-gridb'>
          <Counter label = {"Barbie"} style = {barbieButton}/>
          <Counter label = {"Oppenheimer"} style = {oppenheimerButton} />
        </div>
      </header>
    </div>
  );
}

const oppenheimerButton = {
  backgroundColor: "black",
  color: "white",
  width: 170,
  height: 50,
  borderRadius: 100
};

const barbieButton = {
  backgroundColor: "pink",
  color: "black",
  width: 150,
  height: 50,
  borderRadius: 100
};

export default App;
