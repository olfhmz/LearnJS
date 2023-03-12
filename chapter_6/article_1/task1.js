// рекурсия
// function sumTo(n) {
// 	if (n == 1)
// 		return n;
// 	else {
// 		return (n + sumTo(n - 1));
// 	}
// }

// цикл
// function sumTo(n) {
// 	let ret = 0;

// 	for (let i = 1; i <= n; i++) {
// 		ret += i;
// 	}

// 	return ret;
// }

// формула
function sumTo(n) {
  return n * (n + 1) / 2;
}

// console.log(sumTo(100));