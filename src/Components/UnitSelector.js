const UnitSelector = ({ selector, setSelector, conversionTable }) => {
  return (
    <select value={selector} onChange={(e) => setSelector(e.target.value)}>
      {Object.keys(conversionTable.table).map((e) => (
        <option key={e} value={e}>
          {e}
        </option>
      ))}
    </select>

    // <select
    //         value={selector2}
    //         onChange={(e) => setSelector2(e.target.value)}
    //       >
    //         {Object.keys(conversionTable.table).map((e) => (
    //           <option key={e} value={e}>
    //             {e}
    //           </option>
    //         ))}
    //       </select>
  );
};
export default UnitSelector;
