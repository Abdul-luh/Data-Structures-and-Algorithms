function recursiveFibonacci(n) {
	if (n < 2) return n;
	return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(6));

console.log(recursiveFibonacci(7));

/*
                                    f7
                    ---------------|-----------------
                    |                               |
                    f6 	                     		f5                      2^1
            -------|---------                   ------|---------
            f5              f4                  f4              f3          2^2
        -----|------   ------|-----          ----|----      -----|---  
        f4         f3  f3         f2         f3      f2     f2      f1      2^3

*/

// Big-O Fibonacci algorithm  - O(n)
// Big-O Fibonacci recursion algorithm  - O(2^n)
