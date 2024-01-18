// FIBONACCI SEQUENCE
// PROBLEM STATEMENT
/*
	Given a number 'n', find the first 'n' statement of the Fibonacci Sequence 

	In, Mathematics. the Fibonacci sequence is a sequence in which each number is a sum of the two preceeding once

	the first two default numbers in the sequence are 0 and 1

	fibonacci(2)) = [0, 1]
	fibonacci(3)) = [0, 1, 1]
 	fibonacci(7)) = [0, 1, 1, 2, 3, 5, 8]
*/

function fibonacci(n) {
	let fib = [0, 1];
	for (let i = 2; i < n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib;
}

// The function execution = 2+n

// console.log(fibonacci(2)); // [0, 1]
console.log(fibonacci(3)); // [0, 1, 1]
console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]

// The Big-O of this algorithm is O(n) linear

// Determining the Big-O CheatSheet
/*
    1. Loop - O(n)
    2. Nested loops - O(n^2)
    input size reduced by half - O(logn)

-------------------------------------------------
Big-O Trend CheetSheet							|
------------------------------------------------|
O(1) Constant is very good						|
O(logn) Logarithmic is very good				|
O(n) Linear is fair								|
O(n logn) Linear and Logarithmic is bad			|
O(n^2) Quadratic is very bad					|
O(2^n) Quadratic is very bad					|
O(n!) factorial is very bad						|
-------------------------------------------------

*/
