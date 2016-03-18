function calculatePay(startTime, endTime){
	var pay = 0;
	var i = 0;
	var j = 0;
	var startFrac = fractionHour(startTime);
	var endFrac = fractionHour(endTime);
	var start = convertTime(startTime);
	var end = convertTime(endTime);

	console.log(startFrac);
	console.log(endFrac);




	while(end !== start) {
		if (end > 12) {
			pay += 16;
		}
		else if (end <=12 && end >9 ) {
			pay += 8;
		}
		else {
			pay +=12;
		}
		end -= 1;
	}

  return '$' + pay + '.00';

  function fractionHour(time) {
  	var fraction = [];
  	fraction.push(time[time.indexOf(':')+1]);
  	fraction.push(time[time.indexOf(':')+2]);
  	fraction = fraction.join("");
  	return fraction;
  }

  function convertTime(time) {
  	var index = 0;
  	var convertedTime = '';
  	while(time[index] !== ':') {
  		convertedTime += time[index];
  		index++
  	};
  	numTime = Number(convertedTime);
  	if (/[A]/.test(time) && numTime !== 12) {
  		numTime += 12
  	}
  	return numTime;
  }
}