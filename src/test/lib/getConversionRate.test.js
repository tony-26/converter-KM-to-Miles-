import getConversionRate from "../../lib/getConversionRate";

describe("getConversionRate", () => {
  it("example1", () => {
    const table = { Miles: 1600, KM: 1000, foot: 0.3, Meters: 1 };
    const unit1 = "Miles";
    const unit2 = "KM";
    const result = getConversionRate(table, unit1, unit2);
    expect(result).toEqual(1.6);
  });

  it("example2", () => {
    const table = { Miles: 1600, KM: 1000, foot: 0.2, Meters: 1 };
    const unit1 = "KM";
    const unit2 = "foot";
    const result = getConversionRate(table, unit1, unit2);
    expect(result).toEqual(5000);
  });

  it("example3", () => {
    const table = {
      dog: 200,
      cat: 400,
      hamster: 50,
      bird: 20,
      tiger: 1000,
      GBP: 1,
    };

    const unit1 = "dog";
    const unit2 = "bird";
    const result = getConversionRate(table, unit1, unit2);
    expect(result).toEqual(10);
  });
});
