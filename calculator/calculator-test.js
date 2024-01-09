
describe('tests calculated rates', function () {
  it('should calculate the monthly rate correctly', function () {
    // ...
    const values = {
      amount: 100000,
      years: 30,
      rate: 3.25
    };
    expect(calculateMonthlyPayment(values)).toEqual('435.21');
  });


  it("should handle high interest rates", function () {
    const values = {
      amount: 1000,
      years: 40,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('82.50');
  })


  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  });
});
/// etc
