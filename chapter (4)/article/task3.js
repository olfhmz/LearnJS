
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaties(obj) {
	let sum = 0;
	for (let key in obj) {
sum += salaries[key];
	}
	return sum;
}

console.log(sumSalaties(salaries));
