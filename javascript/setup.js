function calculatePay(startTime, endTime){
	var pay = 0;
	var i = 0;
	var j = 0;
	var start = convertTime(startTime, true);
	var end = convertTime(endTime);
	if (start< 5) {
		start = 5;
	}
	if (end > 16) {
		end = 16
	}

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

  function convertTime(time, start) {
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
  	var fracIndex = time.indexOf(':');
  	if ((time[fracIndex+1] !== '0' || time[fracIndex+2] !=='0') && start) {
  		numTime += 1
  	}
  	console.log(numTime);
  	return numTime;
  }
}