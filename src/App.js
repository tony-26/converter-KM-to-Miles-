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
  const [userInput, setUserInput] = useState(0);
  const [selector1, setSelector1] = useState("Miles");
  const [selector2, setSelector2] = useState("Miles");
  const [convertedValue, setConvertedValue] = useState(0);

  const convertDistance = () => {
    if (selector1 === selector2) {
      setConvertedValue(userInput); // No conversion needed
    } else if (selector1 === "Miles" && selector2 === "KM") {
      setConvertedValue(userInput * 1.6); // Convert Miles to KM
    } else if (selector1 === "KM" && selector2 === "Miles") {
      setConvertedValue(userInput * 0.62); // Convert KM to Miles
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Distance Converter</h1>
      </header>
      <body>
        <h3>Please enter the distance</h3>

        <select
          value={selector1}
          onChange={(e) => setSelector1(e.target.value)}
        >
          <option value="Miles">Miles</option>
          <option value="KM">KM</option>
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
          <option value="Miles">Miles</option>
          <option value="KM">KM</option>
        </select>

        <button onClick={convertDistance}>Convert</button>

        <h2>
          {convertedValue} {selector2}
        </h2>
        <h2></h2>
      </body>
    </div>
  );
}

export default App;
