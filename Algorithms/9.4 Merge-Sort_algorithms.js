// MERGE SORT
/* <PROBLEM STATEMEN>

 Given and array of integers, sort the array.
 const arr = [-6, 20, 8, -2, 4]
 quicksort(arr) => should return [-6, -2, 4, 8, 20]
 
 
 Understanding the Idea Behind Merge Sort

 Identify the pivot element in the array
    - Divide the array into sub-arrays, each containing only one element(An array with one element is considered sorted)
    - Repeatedly merge the sub-arrays to produce new sub sorted arrays until there is only one sub array remaining. that will be the sorted algorithm

 
 */

const arrNums = [-6, 20, 8, -2, 4];

console.log("Numbers array in original order: " + arrNums);

function mergeSortAsc(arr) {
	if (arr.length < 2) return arr;

	let mid = Math.floor(arr.length / 2);
	let leftArr = arr.slice(0, mid);
	let rightArr = arr.slice(mid);

	return merge(mergeSortAsc(leftArr), mergeSortAsc(rightArr));
}

function merge(leftArr, rightArr) {
	let sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}
	return [...sortedArr, ...leftArr, ...rightArr];
}

console.log(mergeSortAsc(arrNums));

function mergeSortDesc(arr) {
	if (arr.length > 2) return arr;
	let mid = Math.floor(arr.length / 2);
	let leftArr = arr.slice(mid);
	let rightArr = arr.slice(0, mid);

	return merge(mergeSortDesc(rightArr), mergeSortDesc(leftArr));
}

console.log(mergeSortDesc(arrNums));

// BigO = O(nlogn)
