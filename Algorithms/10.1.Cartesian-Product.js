// CARTESIAN PRODUCT
// let's take a look at the cartesian products of two sets
// <PROBLEM STATEMENT>
/**
 * Givent two finite non-empty sets, find their Cartesian Product.
 *
 * WHAT IS A CARTESIAN PRODUCT?
 * Generally in mathematics, specifically the set theory, the Cartesian product of two sets A and B, denots AXB, is the set of all ordered pairs (a,b) where a is in A and b is in B
 *
 * FOR XMP:
 * A = [1,2]
 * B = [3,4]
 * AXB = [[1,3],[1,4],[2,3],[2,4]]
 *
 * SIMILARLY:
 *
 * C = [1,2]
 * D = [3,4,5]
 * CXD = [[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]]
 *
 * WHAT'S THE BIG IDEA:
 * - Traverse each array and pair each element in the first array with each element in the second array
 */

let A = [1, 2];
let B = [3, 4];
let AXB = [
	[1, 3],
	[1, 4],
	[2, 3],
	[2, 4],
];

function cartesianProduct(arr1, arr2) {
	let result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push([arr1[i], arr2[j]]);
		}
	}
	return result;
}

let C = [1, 2];
let D = [3, 4, 5];

console.log(cartesianProduct(A, B));
console.log(cartesianProduct(C, D));

// BigO = O(n^2) if the length of both arrays are the same but
// BigO = O(mn)
