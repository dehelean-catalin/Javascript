const date = new Date();

var lastYear = document.querySelector(".lastYear").value;
var birthday = document.querySelector(".birthday").value;
var birthdayYear;

function handleData(event) {
	birthday = document.querySelector(".birthday").value;
	birthdayYear = birthday.slice(0, 4);
	birthdayMonth = Number(birthday.slice(5, 7));
	birthdayDay = Number(birthday.slice(8, 10));
	lastYear = document.querySelector(".lastYear").value;
}

function handleSubmit(event) {
	event.preventDefault();

	if (!isNaN(Number(lastYear)) && Number(lastYear) > Number(birthdayYear) && birthday.length === 10) {
		for (var year = Number(birthdayYear); year <= Number(lastYear); year++) {
			var d = new Date(year, birthdayDay, birthdayMonth);
			if (d.getDay() === 0) {
				console.log(year + " " + "sunday");
			} else if (d.getDay() === 1) {
				console.log(year + " " + "monday");
			} else if (d.getDay() === 2) {
				console.log(year + " " + "wednesday");
			} else if (d.getDay() === 3) {
				console.log(year + " " + "thursday");
			} else if (d.getDay() === 4) {
				console.log(year + " " + "friday");
			} else if (d.getDay() === 5) {
				console.log(year + " " + "saturday");
			}
		}
	}
	if (birthday.length !== 0) {
		document.querySelector(".birthday").style.borderColor = "white";
	} else {
		document.querySelector(".birthday").style.borderColor = "red";
	}
	if (!isNaN(Number(lastYear)) && Number(lastYear) > Number(birthdayYear) && lastYear.length !== 0) {
		document.querySelector(".lastYear").style.borderColor = "white";
	} else {
		document.querySelector(".lastYear").style.borderColor = "red";
	}
}
