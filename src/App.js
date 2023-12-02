import "./App.css";
import { useState } from "react";
import getConversionRate from "./lib/getConversionRate";
import UnitSelector from "./Components/UnitSelector";

function App() {
  const conversionTables = [
    {
      description: "Currency conversions",
      baseUnit: "USD",
      table: {
        CNY: 0.14673,
        EUR: 1.1356,
        GBP: 1.2893,
        JPY: 0.006687,
        USD: 1,
      },
    },
    {
      description: "Length conversions",
      baseUnit: "Meters",
      table: {
        Miles: 1609.34,
        KM: 1000,
        Yards: 0.9144,
        Feet: 0.3048,
        Inches: 0.0254,
        CM: 0.01,
        MM: 0.001,
        Meters: 1,
      },
    },
    {
      description: "Volume conversions",
      baseUnit: "Liters",
      table: {
        Liters: 1,
        Pints: 0.651,
        ML: 0.001,
      },
    },
  ];

  const [conversionTable, setConversionTable] = useState(conversionTables[0]);
  const [userInput, setUserInput] = useState(0);
  const [selector1, setSelector1] = useState(conversionTables[0].baseUnit);
  const [selector2, setSelector2] = useState(conversionTables[0].baseUnit);
  const [convertedValue, setConvertedValue] = useState(0);

  const convertDistance = () => {
    const conversionRate = getConversionRate(
      conversionTable.table,
      selector1,
      selector2
    );
    const result = (userInput * conversionRate).toFixed(2);
    setConvertedValue(result);
  };

  return (
    <div>
      <header>
        <h1>{conversionTable.description}</h1>
      </header>
      <body>
        <select
          onChange={(e) => {
            setConversionTable(conversionTables[e.target.value]);
            setSelector1(conversionTables[e.target.value].baseUnit);
            setSelector2(conversionTables[e.target.value].baseUnit);
          }}
        >
          {conversionTables.map((e, i) => {
            return (
              <option key={i} value={i}>
                {e.baseUnit}
              </option>
            );
          })}
        </select>

        <UnitSelector
          selector={selector1}
          setSelector={setSelector1}
          conversionTable={conversionTable}
        />

        <input
          type="number"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />

        <UnitSelector
          selector={selector2}
          setSelector={setSelector2}
          conversionTable={conversionTable}
        />

        <button onClick={convertDistance}>Convert</button>

        <h2>
          {convertedValue} {selector2}
        </h2>
      </body>
    </div>
  );
}

export default App;
