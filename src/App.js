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

function App() {
  const [distance, setDistance] = useState(0);
  const [userInput, setUserInput] = useState(0);
  const [conversionType, setConversionType] = useState("KMtoMiles");
  const [convertedValue, setConvertedValue] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Distance Converter</h1>
      </header>
      <body>
        <h3>Please enter the distance</h3>

        <select name="milesOrKm" id="unit">
          <option value="Miles">Miles</option>
          <option value="KM">KM</option>
        </select>

        <input
          type="number"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <select name="milesOrKm" id="unit">
          <option value="Miles">Miles</option>
          <option value="KM">KM</option>
        </select>
        <button>Convert</button>
      </body>
    </div>
  );
}

export default App;
