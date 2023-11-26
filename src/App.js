import "./App.css";
import { useState } from "react";
import getConversionRate from "./lib/getConversionRate";

function App() {
  // const conversionTable = {
  //   CNY: 0.14673,
  //   EUR: 1.1356,
  //   GBP: 1.2893,
  //   JPY: 0.006687,
  //   USD: 1,
  //   baseUnit: "USD",
  // };
  const conversionTable = {
    Miles: 1609.34,
    KM: 1000,
    Yards: 0.9144,
    Feet: 0.3048,
    Inches: 0.0254,
    CM: 0.01,
    MM: 0.001,
    Meters: 1,
    baseUnit: "Meters",
  };

  const [userInput, setUserInput] = useState(0);
  const [selector1, setSelector1] = useState(conversionTable.baseUnit);
  const [selector2, setSelector2] = useState(conversionTable.baseUnit);
  const [convertedValue, setConvertedValue] = useState(0);

  const convertDistance = () => {
    const conversionRate = getConversionRate(
      conversionTable,
      selector1,
      selector2
    );
    setConvertedValue(userInput * conversionRate);
  };

  return (
    <div>
      <header>
        <h1>Distance Converter</h1>
      </header>
      <body>
        <h3>Please enter the distance</h3>

        {/* <select
          value={unitSelector}
          onChange={(e) => {
            setUnitSelector(e.target.value);
          }}
        >
          {units.map((e, i) => {
            return <option key={i}>{e}</option>;
          })}
        </select> */}

        <select
          value={selector1}
          onChange={(e) => setSelector1(e.target.value)}
        >
          {Object.keys(conversionTable).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <input
          type="number"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />

        <select
          value={selector2}
          onChange={(e) => setSelector2(e.target.value)}
        >
          {Object.keys(conversionTable).map((e) => (
            <option key={e} value={e}>
              {e}
            </option>
          ))}
        </select>

        <button onClick={convertDistance}>Convert</button>

        <h2>
          {convertedValue} {selector2}
        </h2>
      </body>
    </div>
  );
}

export default App;
