function calculatePay(startTime, endTime){
	var pay;
	startTime = startTime.split("")[0];
	endTime = endTime.split("")[0];
	pay = (endTime - startTime)*12

  return '$' + pay + '.00';
}