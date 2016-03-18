describe('jasmine test', function(){
  it('true should be true', function() {
    expect(true).toBe(true);
  });

});

describe('Babysitter recieves 12$/hr between start time and bedtime', function(){
  it('if babysitter works from 5PM to 6PM, babysitter makes 12$', function() {
    expect(calculatePay('5:00PM', '6:00PM')).toBe('$12.00');
  });
  it('if babysitter works from 5PM to 7PM, babysitter makes 24$', function() {
    expect(calculatePay('5:00PM', '7:00PM')).toBe('$24.00');
  });
  it('if babysitter works from 5PM to 8PM, babysitter makes 36$', function() {
    expect(calculatePay('5:00PM', '8:00PM')).toBe('$36.00');
  });
});

describe('Babysitter makes only $8/hr from bedtime (9PM) to midnight', function(){
  it('if babysitter works from 9PM to 10PM, babysitter makes 8$', function() {
    expect(calculatePay('9:00PM', '10:00PM')).toBe('$12.00');
});

});
