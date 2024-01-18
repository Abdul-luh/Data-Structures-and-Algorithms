// PRIME NUMBER
// < PROBLEM >
// Given a natural number "n", determine if the number is prome or not
// A prime number is a natural number greater than 1 that is not a product of two smaller numbers

function isPrime(n) {
	// We know that any number lesser than 2 is not a prime number therefore
	if (n < 2) false;

	// when the number is grater than 1 divide by all numbers lesser that the number passed in and if there is one number lesser than it that divides without remainder then is not a prime number
	for (let i = 2; i < n; i++) {
		if (n % i === 0) false;
	}

	// after any of the above conditions is met then the number is a prime number
	return true;
}



// for (let i = 0; i < 100; i++) {
// 	console.log(isPrime(i), i);
// } // to all the prime numbers from 1-100

// console.log(isPrime(1));
// console.log(isPrime(5)); // function execution for n=5 is 2 + n = 7
// console.log(isPrime(11));
// console.log(isPrime(3));
// console.log(isPrime(4));

// Big-O of the algorithm is O(n) - linear time complexity

// some more precise and optimal way to solve the algorithm
// function isPrimeBySqrt(n) {
// 	if (n < 2) return false;
// 	for (let i = 2; i <= Math.sqrt(n); i++) {
// 		if (n % i === 0) return false;
// 	}
// 	return true;
// }

console.log(isPrime(1));
console.log(isPrime(5)); // function execution for n=5 is 2 + n = 7
console.log(isPrime(11));
console.log(isPrime(3));
console.log(isPrime(4));

// the Big-O is therefore == o(sqrt(n))
