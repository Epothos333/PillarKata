function calculatePay(startTime, endTime){
	var pay = 0;
	var i = 0;
	var j = 0;
	var start = convertTime(startTime);
	var end = convertTime(endTime);
	// if (/[A]/.test(endTime) && end !== 12) {
	// 	end +=12;
	// }
	// if (/[A]/.test(startTime) && start !== 12) {
	// 	start +=12;
	// }
	console.log(start);
	console.log(end);

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

  function convertTime(time) {
  	var x = 0;
  	var convertedTime = '';
  	while(time[x] !== ':') {
  		convertedTime += time[x];
  		x++
  	};
  	numTime = Number(convertedTime);
  	if (/[A]/.test(time) && numTime !== 12) {
  		numTime += 12
  	}
  	return numTime;
  }
}