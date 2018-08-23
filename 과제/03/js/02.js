var sec = document.getElementById('sec');
var min = document.getElementById('min');
var hour = document.getElementById('hour');
var sec_val = 0;
var min_val = 0;
var hour_val = 0;

setInterval(clock,100);

function clock(){
	sec_val += 1;
	sec.innerHTML = sec_val;

	if (sec_val > 59) {
		sec_val = 0;
		sec.innerHTML = sec_val;
		min_val += 1;
		min.innerHTML = min_val;
	}

	if (min_val > 59) {
		min_val = 0;
		min.innerHTML = sec_val;
		hour_val += 1;
		hour.innerHTML = hour_val;
	}

	if (sec_val < 10) {
		sec.innerHTML = "0" + sec_val;
	}

	if (min_val < 10) {
		min.innerHTML = "0" + min_val;
	}

	if (hour_val < 10) {
		hour.innerHTML = "0" + hour_val;
	}

}
