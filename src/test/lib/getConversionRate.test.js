import getConversionRate from "../../lib/getConversionRate";

describe("getConversionRate", () => {
  it("example1", () => {
    const table = {};
    const unit1 = "KM";
    const unit2 = "Miles";
    const result = getConversionRate(table, unit1, unit2);
    expect(result).toEqual(0.62);
    
  });
});
