function calculatePay(startTime, endTime){
	var pay;
	var i = 0;
	var j = 0;
	var start = '';
	var end = '';
	startTime = startTime.split("");
	endTime = endTime.split("");
	while(startTime[i] !== ':') {
		start += startTime[i];
		i++;
	}
	while(endTime[j] !== ':') {
		end += endTime[j];
		j++;
	}
	console.log(start);
	console.log(end);

	if (start >= 12) {
		pay = (end - (start-12)) * 16;
	}
	else if (start >= 9) {
		pay = (end -start) * 8;
	} 
	else {
		pay = (end - start)*12;
	}


  return '$' + pay + '.00';
}