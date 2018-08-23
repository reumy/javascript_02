function adder(a,b){

	var min_num = Math.min(a,b);
	var max_num = Math.max(a,b);	
	var arr = [];
	var result = 0;


	if (min_num > 0) {
		for (var i = 0; i < max_num - min_num + 1; i++) {		
			arr.push(min_num + i);		
		}
	}

	if (min_num == 0) {
		for (var i = 0; i < max_num + 1; i++) {		
			arr.push(min_num + i);
		}
	}

	if (min_num < 0) {
		for (var i = 0; i < max_num + -min_num + 1; i++) {		
			arr.push(min_num + i);
		}
	}

	for (var j = 0; j < arr.length; j++) {		
		result = result + arr[j];			
	}

	return result;
}

var result_01 = adder(3,5);
var result_02 = adder(5,3);
var result_03 = adder(10,10);
var result_04 = adder(-3,5);
var result_05 = adder(5,-3);
var result_06 = adder(0,5);
var result_07 = adder(5,0);

document.write(result_01 + '<br />');
document.write(result_02 + '<br />');
document.write(result_03 + '<br />');
document.write(result_04 + '<br />');
document.write(result_05 + '<br />');
document.write(result_06 + '<br />');
document.write(result_07 + '<br />');