// <Recursive Binary Search>

// <Problem Statement>
// Given a sorted array of 'n' elements and a target elememt 't', find the index of 't' in the array
// Return >>>
/*
 * -1 if the target element is not found
   arr = [-5, 2,  4, 6, 10], t = 10 -> should return 4
   arr = [-5, 2,  4, 6, 10], t = 6 -> should return 3
   arr = [-5, 2,  4, 6, 10], t = 20 -> should return -1
 */

// Tips:
// figure out how to break the problem into smaller versions of the same problem
// Identify the base case for recursion

// >> PSUEDO CODE
/*
    If the array is empty, return -1 as element cannot be found.
    if the array has element, find the midde element in the array #. If target is equal to the middle element, return the middle element index
    If the target is less than the middle element, binary search left of the array
    If target is greater than middle element, binary search right half of the array
*/

/*   SOLUTION   */

const arrNums = [-5, 2, 4, 6, 10];

function recursiveBinarySearch(arr, t) {
	return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) return -1;

	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

	if (t === arr[middleIndex]) return middleIndex;

	if (t < arr[middleIndex]) {
		return search(arr, t, leftIndex, middleIndex - 1);
	} else {
		return search(arr, t, middleIndex + 1, rightIndex);
	}
}

console.log(recursiveBinarySearch(arrNums, 10)); // 4
console.log(recursiveBinarySearch(arrNums, 6)); // 3
console.log(recursiveBinarySearch(arrNums, 20)); // -1

// Big-O of this algorithm is O(logn)
