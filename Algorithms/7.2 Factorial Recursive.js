// <PROBLEM-STATEMENT>
// Given an integer "n" find the factorial of that integer
// The factorial of a non-negative integer "n", donoted by n!, is the product of all positive integers less than or equal to `n`.

function recursiveFactorial(n) {
	if (n === 0) return 1;
	// let result = 1;
	// for (let i = 1; i <= n; i++) {
	// 	result *= i;
	// }

	return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

// Big-O = O(n)
