function fibonacci(n) {
	const fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}

// console.log(fibonacci(2)); // [0, 1]
// console.log(fibonacci(3)); // [0, 1, 1]
// console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// The Big-O of this algorithm is O(n) linear

// Determining the Big-O CheatSheet
/*
    1. Loop - O(n)
    2. Nested loops - O(n^2)
    input size reduced by half - O(logn)

*/
