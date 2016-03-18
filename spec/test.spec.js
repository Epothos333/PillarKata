describe('jasmine test', function(){
  it('true should be true', function() {
    expect(true).toBe(true);
  });

});

describe('Babysitter recieves 12$/hr between start time and bedtime', function(){
  it('if babysitter works from 5PM to 6PM, babysitter makes 12$', function() {
    expect(calculatePay('5:00PM, 6:00PM')).toBe('$12.00');
  });

});
