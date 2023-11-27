// POWER OF TWO

// psuedocode
// if n= 8
// continue dividing n by 2 while n > 2
// until n = 2
// 8/2 = 4 r(0)
// 4/2 = 2 r(0)
// 2/2 = 1 r(0)
// if the remainder is not 0 in any step , n is not a power of two
// if the remainder is 0 and n comes down to 1 eventually, n is a power of 3

/* 
    My Personal View of understanding
     
    we have n as the input
    if n % 2 !== 0 #

*/

function isPowerOfTwo(n) {
	if (n < 1) return false;
	while (n > 1) {
		if (n % 2 !== 0) return false;
		else {
			n = n / 2;
		}
	}
	return true;
}

// isPowerOfTwo(1)  = true 2^0
// isPowerOfTwo(2)  = true 2^1
// isPowerOfTwo(3)  = false
// isPowerOfTwo(8)  = true 2^3
// console.log(isPowerOfTwo(32));

// the Big-O of this function howerver will not be linear just because of the presences of a loop but how the value changes within the loop which is being reduced by half
// therefore it is O(logn) - logarithmic

// USE OF BITWISE OPERATIONS

function isPowerOfTwoBitWise(n) {
	if (n < 1) return false;
	return (n & (n - 1)) === 0; // using BITWISE operator the code is mouch smaller
}

// the solution is more optimal;
// Big-O = O(1)

console.log(isPowerOfTwoBitWise(4));
