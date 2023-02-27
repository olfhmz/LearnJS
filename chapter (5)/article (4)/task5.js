
function getMaxSubSum(arr) {
  	let max = 0;
  	let currentSum = 0;

  	for (let item of arr) {
  	  currentSum += item;
  	  max = Math.max(max, currentSum);
  	  if (currentSum < 0) currentSum = 0;
  	}

  	return max;
}	
