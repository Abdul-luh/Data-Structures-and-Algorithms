// Binary search Algorithm

// <Problem Statement>
// Given a sorted array of 'n' elements and a target elememt 't', find the index of 't' in the array
// Return >>>
/*
 * -1 if the target element is not found
   arr = [-5, 2,  4, 6, 10], t = 10 -> should return 4
   arr = [-5, 2,  4, 6, 10], t = 6 -> should return 3
   arr = [-5, 2,  4, 6, 10], t = 20 -> should return -1
 */

// NOTE: Binary search only works on sorted array or sort the array first then apply binary search

/*
    Binary Search Psuedocode

    if the array is empty, return -1 as the element cannot be found.
    if the array has elements, find the middle element in the array. if the target is equal to the middle element index.
    if the target is less than the middle element, binary search left half of the array.
    if target is greater than the middle element, binary search right half of the array.

*/

const arrNums = [-5, 2, 4, 6, 10];

function binarySearch(arr, t) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (t === arr[middleIndex]) return middleIndex;

		if (t < middleIndex) {
			rightIndex = middleIndex - 1;
		} else {
			leftIndex = middleIndex + 1;
		}
	}

	return -1;

	// if (arr.length === 0) return -1
	// if (arr.length & t === arr[(arr.length -1) / 2]) {
	//     return
	//     }
}

console.log(binarySearch(arrNums, 10));
console.log(binarySearch(arrNums, 6));
console.log(binarySearch(arrNums, 20));

// Big-O of this algorithm is O(logn)
