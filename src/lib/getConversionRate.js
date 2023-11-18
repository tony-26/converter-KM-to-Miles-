export default (table, unit1, unit2) => {
  const valueOfOneUnit1 = table[unit1];
  const valueOfOneUnit2 = table[unit2];
  const conversionRate = valueOfOneUnit1 / valueOfOneUnit2;
  return conversionRate;
};
