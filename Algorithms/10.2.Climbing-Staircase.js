// CLIMBING STIRCASE
// <PROBLEM STATEMENT>
/**
 * Givent a staircase of 'n' steps, count the nuber fo disticts ways to climb to the top given you can only climb one or two steps at a time
 *
 * WHAT IS A CARTESIAN PRODUCT?
 * Generally in mathematics, specifically the set theory, the Cartesian product of two sets A and B, denots AXB, is the set of all ordered pairs (a,b) where a is in A and b is in B
 *
 * FOR XMP:
 * n = 1, climbingStaircase(1) = 1  | (1)
 * n = 2, climbingStaircase(2) = 2  | (1,1) and 2
 * n = 3, climbingStaircase(3) = 3 | (1,1,1),(2,1) and (1,2)
 * n = 4, climbingStaircase(1) = 5 | (1,1,1,1), (1,1,2), (1,2,1) and (2,1,1,)
 */

function climbingStaircase(n) {
	let res = [1, 2];
	for (let i = 2; i <= n; i++) {
		res[i] = res[i - 1] + res[i - 2];
	}
	return res[n - 1];
}

console.log(climbingStaircase(5));
