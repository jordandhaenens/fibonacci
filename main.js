
function fibonacciGen(id) {
	var div = document.getElementById("id")
	var fibonacci = [0, 1];
	for (var i = 0; i < fibonacci.length; i++) {
		var newNum = fibonacci[i] + fibonacci[i + 1];
		if (newNum < 500) {
			fibonacci.push(newNum);
		} else {
			break;
		}
	}
	div.innerHTML = fibonacci;
}


var fibonacci = [0, 1];
for (var i = 0; i < fibonacci.length; i++) {
	var newNum = fibonacci[i] + fibonacci[i + 1];
	if (newNum < 500) {
		fibonacci.push(newNum);
	} else {
		break;
	}
	console.log(fibonacci)
}