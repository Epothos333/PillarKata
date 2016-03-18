function calculatePay(startTime, endTime){
	var pay;
	var i = 0;
	var j = 0;
	var start = convertTime(startTime);
	var end = convertTime(endTime);
	if (/[A]/.test(endTime) && end !== 12) {
		end +=12;
	}
	console.log(start);
	console.log(end);


	if (start >= 12) {
		pay = (end - start) * 16;
	}
	else if (start >= 9) {
		pay = (end -start) * 8;
	} 
	else {
		pay = (end - start)*12;
	}




  return '$' + pay + '.00';

  function convertTime(time) {
  	var x = 0;
  	var convertedTime = '';
  	while(time[x] !== ':') {
  		convertedTime += time[x];
  		x++
  	}
  	return Number(convertedTime);
  }
}