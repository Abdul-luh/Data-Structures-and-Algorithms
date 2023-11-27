// PRIME NUMBER
// < PROBLEM >
// Given a natural number "n", determine if the number is prome or not
// A prime number is a natural number greater than 1 that is not a product of two smaller numbers

function isPrime(n) {
	if (n < 1) return false;
	for (i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}
}

// for (let i = 0; i < 100; i++) {
// 	console.log(isPrime(i), i);
// } // to all the prime numbers from 1-100

console.log(isPrime(1));
console.log(isPrime(5)); // function execution for n=5 is 2 + n = 7
console.log(isPrime(4));

// Big-O of the algorithm is O(n) - linear time complexity

// some more precise way to solve the algorithm
function isPrimeBySqrt(n) {
	if (n < 2) return false;
	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
		return true;
	}
}
