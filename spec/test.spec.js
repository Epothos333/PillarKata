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
    expect(calculatePay('9:00PM', '10:00PM')).toBe('$8.00');
	});
   it('if babysitter works from 9PM to 12AM, babysitter makes 8$', function() {
    expect(calculatePay('9:00PM', '12:00AM')).toBe('$24.00');
	});
});

describe('Babysitter makes $16/hr from midnight to 4AM', function(){
  it('if babysitter works from 12AM to 1AM, babysitter makes 16$', function() {
    expect(calculatePay('12:00AM', '1:00AM')).toBe('$16.00');
	});
    it('if babysitter works from 12AM to 4AM, babysitter makes 16$', function() {
    expect(calculatePay('12:00AM', '4:00AM')).toBe('$64.00');
	});
});

describe('Babysitter gets paid differently hourly wage as time goes on', function(){
  it('if babysitter works from 8PM to 10PM, babysitter makes 12+8 = 20$', function() {
    expect(calculatePay('8:00AM', '10:00PM')).toBe('$20.00');
	});
});
