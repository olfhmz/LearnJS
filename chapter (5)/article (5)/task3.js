function filterRangeInPlace(arr, a, b) {
	let i = 0;

	while (i < arr.length) {
let j = arr[i];
if (j < a || j > b) {
	arr.splice(i, 1);
	i--;
}
i++;
	}
}