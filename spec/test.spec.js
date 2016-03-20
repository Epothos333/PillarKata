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
   it('if babysitter works from 9PM to 12AM, babysitter makes 24$', function() {
    expect(calculatePay('9:00PM', '12:00AM')).toBe('$24.00');
	});
});

describe('Babysitter makes $16/hr from midnight to 4AM', function(){
  it('if babysitter works from 12AM to 1AM, babysitter makes 16$', function() {
    expect(calculatePay('12:00AM', '1:00AM')).toBe('$16.00');
	});
    it('if babysitter works from 12AM to 4AM, babysitter makes 64$', function() {
    expect(calculatePay('12:00AM', '4:00AM')).toBe('$64.00');
	});
});

describe('Babysitter gets paid differently hourly wage as time goes on', function(){
  it('if babysitter works from 8PM to 10PM, babysitter makes 12+8 = 20$', function() {
    expect(calculatePay('8:00PM', '10:00PM')).toBe('$20.00');
	});
  it('if babysitter works from 8PM to 12AM, babysitter makes 12+8+8+8 = 36$', function() {
    expect(calculatePay('8:00PM', '12:00AM')).toBe('$36.00');
	});
  it('if babysitter works from 8PM to 1AM, babysitter makes 12+8+8+8+16 = 52$', function() {
    expect(calculatePay('8:00PM', '1:00AM')).toBe('$52.00');
	});
  it('if babysitter works from 9PM to 1AM, babysitter makes 8+8+8+16 = 40$', function() {
    expect(calculatePay('9:00PM', '1:00AM')).toBe('$40.00');
	});
  it('if babysitter works from 1AM to 2AM, babysitter makes 12+8+8+8+16 = 16$', function() {
    expect(calculatePay('1:00AM', '2:00AM')).toBe('$16.00');
	});
});

describe('Babysitter cannot work fractional hours', function(){
  it('if babysitter works from 8:30PM to 10:40PM, babysitter makes 8$', function() {
    expect(calculatePay('8:30PM', '10:40PM')).toBe('$8.00');
	});
  it('if babysitter works from 1:30AM to 2:20AM, babysitter makes 0$', function() {
    expect(calculatePay('1:30AM', '2:20AM')).toBe('$0.00');
	});
  it('if babysitter works from 12:30AM to 2:40AM, babysitter makes 16$', function() {
    expect(calculatePay('12:30AM', '2:40AM')).toBe('$16.00');
	});
  it('if babysitter works from 11:30PM to 4:20AM, babysitter makes 64$', function() {
    expect(calculatePay('11:30PM', '4:20AM')).toBe('$64.00');
	});
});

describe('Babysitter must start at 5PM or later and leave by 4AM or earlier', function(){
  it('if babysitter start at 3PM, only gets paid starting at 5PM and gets error; 3PM to 10PM is 4*12 + 8 = 56$', function() {
    expect(calculatePay('3:00PM', '10:00PM')).toBe('$56.00');
	});
  it('if babysitter leave at 6M, only gets paid up to 4AM; 8PM to 6AM is 12+3*8+4*64 = 100$', function() {
    expect(calculatePay('8:00PM', '6:00AM')).toBe('$100.00');
	});
  it('if babysitter works from 12AM to 11PM she recieves 64$', function() {
    expect(calculatePay('12:00AM', '11:00PM')).toBe('$64.00');
	});
  it('if babysitter works from 1AM to 12AM she recieves 72$', function() {
    expect(calculatePay('1:00AM', '12:00AM')).toBe('$72.00');
	});
  it('if babysitter works from 5PM to 4AM she recieves 136$', function() {
    expect(calculatePay('5:00PM', '4:00AM')).toBe('$136.00');
  });

});


