
function pow(x, n) {
	let num = x;
	for (let i = 1; i < n; i++) {
x *= num; 
	}
	return x;
}

console.log(pow(2, 5));
