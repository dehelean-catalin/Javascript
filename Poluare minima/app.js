const polutionValues = document.querySelector("input").value;
var polution;
function handleChange(event) {
	polution = event.target.value;
}

function handleSubmit() {
	const array = polution.split(",");
	console.log(array);

	const sum = array.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
	const halfSum = sum / 2;
	let arraySortat = array.sort(function (a, b) {
		return a - b;
	});
	console.log(arraySortat);

	let newSum = Infinity;
	while (newSum > halfSum) {
		arraySortat = array.sort(function (a, b) {
			return a - b;
		});
		elementMaxim = arraySortat.pop() / 2;
		arraySortat.push(elementMaxim);
		console.log(arraySortat);
		newSum = array.reduce((previousValue, currentValue) => +previousValue + +currentValue, 0);
		console.log(halfSum);
		console.log(newSum);
	}
}
