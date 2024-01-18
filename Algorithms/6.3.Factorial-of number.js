// Problem Statement
// Given an integer 'n', find the faxtorial of that integer
// In mathematics, the factorial of a non-negative interger 'n', denoted n!, is the product of all positive integers less than or equal to 'n'.

// Factorial of zero is 1

// factorial(4) = 4*3*2*1 = 24

function factorial(n) {
	let product = 1;
	for (let i = 2; i <= n; i++) {
		product *= i;
	}
	return product;
}

// console.log(factorial(0));
// console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

// Big-O id O(n)
// function execution = 2 + n
