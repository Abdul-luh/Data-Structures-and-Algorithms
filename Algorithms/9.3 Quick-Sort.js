// QUICK SORT
/* <PROBLEM STATEMEN>

 Given and array of integers, sort the array.
 const arr = [-6, 20, 8, -2, 4]
 quicksort(arr) => should return [-6, -2, 4, 8, 20]
 
 
 Understanding the Idea Behind Quick Sort

 Identify the pivot element in the array
    - pick the first element as pivot
    - Pick the last element as pivot(Our approach)
    - Pick a random element as pivot
    - pick median element as pivot

 >> What Role Does The Pivot Play?
    You traverse the array from the first element to the last but one element
    then put everything smaller than pivot element into a left array and everything greater than the pivot into the right array
    you then repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted bu definition

    Lastly repeatedly concatenate left array, pivot and right array till one sorted array remains
 
 */

const arrNums = [-6, 20, 8, -2, 4];

console.log("Numbers array in original order: " + quickSortAsc(arrNums));

function quickSortAsc(arr) {
	if (arr.length < 2) return arr;

	let pivot = arr[arr.length - 1];
	let right = [];
	let left = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSortAsc(left), pivot, ...quickSortAsc(right)];
}

console.log("Numbers array is ascending order: " + quickSortAsc(arrNums));

function quickSortDesc(arr) {
	if (arr.length < 2) return arr;
	let pivot = Math.floor(arr.length / 2);
	let right = [];
	let left = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSortDesc(left), pivot, ...quickSortDesc(right)];
}

console.log("Numbers array is descending order: " + quickSortDesc(arrNums));

// WORSE CASE SCENRIO O(n^2)
// MEDIUM CASE SCENRIO O(n^2)
