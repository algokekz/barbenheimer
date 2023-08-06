import './App.css';
import { Button } from './components/Button'

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

const oppenheimerButton = {
  backgroundColor: "black",
  color: "white",
  flexDirection: "row",
  float: "left",
  alignItems: "center",
  width: 100,
  height: 50,
  borderRadius: 100
};

const barbieButton = {
  backgroundColor: "pink",
  color: "black",
  flexDirection: "row",
  float: "left",
  alignItems: "center",
  width: 100,
  height: 50,
  borderRadius: 100
};

export default App;
