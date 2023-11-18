// import "./App.css";
// import { useState } from "react";

// function App() {
//   const [miles, setMiles] = useState(0);
//   const [userInput, setUserInput] = useState(0);
//   const [kmValue, setKmValue] = useState(0);
//   return (
//     <div className="App">
//       <header>
//         <h1>KM to Miles Converter</h1>
//       </header>
//       <body>
//         <h3>Please enter the distance in KM</h3>
//         <input type="dropbox"></input>
//         <input
//           onChange={(e) => {
//             setUserInput(e.target.value);
//           }}
//           value={userInput}
//         ></input>
//         <button
//           onClick={() => {
//             setMiles(userInput * 0.62);
//             setKmValue(userInput);
//           }}
//         >
//           Convert
//         </button>
//       </body>
//       <h2>
//         {kmValue} KM = {miles} miles
//       </h2>
//     </div>
//   );
// }
// export default App;
import "./App.css";
import { useState } from "react";

// function App() {
//   const [userInput, setUserInput] = useState(0);
//   const [selector1, setSelector1] = useState("Miles");
//   const [selector2, setSelector2] = useState("Miles");
//   const [convertedValue, setConvertedValue] = useState(0);
//   const conversions = { Miles_KM: 1.6, KM_Miles: 0.62 };
//   const convertDistance = () => {
//     if (selector1 === selector2) {
//       setConvertedValue(userInput); // No conversion needed
//     } else {
//       const key = selector1 + "_" + selector2;
//       setConvertedValue(userInput * conversions[key]);
//     }
//   };
function App() {
  const [userInput, setUserInput] = useState(0);
  const [selector1, setSelector1] = useState("Meters");
  const [selector2, setSelector2] = useState("Meters");
  const [convertedValue, setConvertedValue] = useState(0);

  //set meters as a standard unit, converting others to meters first
  const toMeters = {
    Miles: 1609.34,
    KM: 1000,
    Yards: 0.9144,
    Feet: 0.3048,
    Inches: 0.0254,
    CM: 0.01,
    MM: 0.001,
    Meters: 1,
  };

  const convertDistance = () => {
    const valueInMeters = userInput * toMeters[selector1];
    const targetValue = valueInMeters / toMeters[selector2];
    setConvertedValue(targetValue);
  };

  return (
    <div>
      <header>
        <h1>Distance Converter</h1>
      </header>
      <body>
        <h3>Please enter the distance</h3>

        <select
          value={selector1}
          onChange={(e) => setSelector1(e.target.value)}
        >
          {Object.keys(toMeters).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
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
          {Object.keys(toMeters).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
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
