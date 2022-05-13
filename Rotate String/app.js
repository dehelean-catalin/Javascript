function handleChange() {
	var text = document.querySelector("input").value;

	var newText = text.trim();
	var b = new Array();
	for (let i = 1; i <= newText.length; i++) {
		g = newText.substring(0, newText.length - i);
		b.push(newText.substring(newText.length - i) + g);
		document.querySelector("h2").innerHTML = b;
	}
}
