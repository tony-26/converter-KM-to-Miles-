export default (table, unit1, unit2) => {
  const table = { Miles_KM: 1.6, KM_Miles: 0.62 };
  if (unit1 === unit2) {
    return 1;
  } else {
    const key = unit1 + "_" + unit2;
    return conversions[key];
  }
};
