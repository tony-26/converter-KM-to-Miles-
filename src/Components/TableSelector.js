const TableSelector = ({
  setConversionTable,
  conversionTables,
  setSelector1,
  setSelector2,
}) => {
  return (
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
  );
};
export default TableSelector;
