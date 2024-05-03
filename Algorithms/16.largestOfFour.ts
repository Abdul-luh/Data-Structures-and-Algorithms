function largestOfFour(arr: Array<Array<number>>) {
	let result: Array<number> = [];
	for (let i = 0; i < arr.length; i++) {
		let maxNum = arr[i][0];
		for (let j = 0; j < arr[i].length; j++) {
			if (maxNum < arr[i][j]) {
				maxNum = arr[i][j];
			}
		}
		result.push(maxNum);
	}
	return result;
}

console.log(
	largestOfFour([
		[4, 5, 1, 3],
		[13, 27, 18, 26],
		[32, 35, 37, 39],
		[1000, 1001, 857, 1],
	])
);
console.log(
	largestOfFour([
		[4, 9, 1, 3],
		[13, 35, 18, 26],
		[32, 35, 97, 39],
		[1000000, 1001, 857, 1],
	])
);
