function inputNumber(_this, type) {
	type = type || '+';

	let input = _this.parentNode.querySelector("input");

	let min = input.getAttribute("min");
	let max = input.getAttribute("max");
	
	let step = input.getAttribute("step");
		step = (step)? step * 1: 1;
	
	let val;

	min = (typeof min === 'string' || typeof min === 'number')? min * 1 : NaN;
	max = (typeof max === 'string' || typeof max === 'number')? max * 1 : NaN;

	if (input.value == '') {
		input.value = (min)? min : 0;
		return;
	}

	val = input.value * 1;

	let res = (val)? val : 0;
		res = (type === '-')? val - step : val + step;
	
	if (res < min  && typeof min != NaN) {
		res = min;
	}
	if (res > max  && typeof max != NaN) {
		res = max;
	}

	input.value = res;
}