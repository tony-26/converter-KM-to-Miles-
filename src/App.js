import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { set, ref } from "firebase/database";
import { database } from "./firebase";

function App() {
  const [miles, setMiles] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [kmValue, setKmValue] = useState(0);
  const km = userInput;
  return (
    <div className="App">
      <header>
        <h1>KM to Miles Converter</h1>
      </header>
      <body>
        <h3>Please enter the distance in KM</h3>
        <input
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
          value={userInput}
        ></input>
        <button
          onClick={() => {
            setMiles(userInput * 0.62);
            setKmValue(userInput);
          }}
        >
          Convert
        </button>
      </body>
      <h2>
        {kmValue} KM = {miles} miles
      </h2>
    </div>
  );
}
export default App;
