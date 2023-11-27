// BUBBLE SORT ALGORITHM
/*
<PROBLEM STATEMEN>

 Given and array of integers, sort the array.
 const arr = [-6, 20, 8, -2, 4]
 bubbleSort(arr) => should return [-6, -2, 4, 8, 20]
 
 NOTE: Bubble sort is a poor sorting algorithm in real world and its primarily used as a good introduction to sorting algorithms
 
 Understanding the Idea Behind Bubble Sort
 You compare adjacent element in the array and swap the positions if they are not in the intended order
 
 Repeat the instruction as you step through element in the array
 once you step through the array with no swaps, the array is sorted
 
 
 
 */

const arrNums = [-6, 20, 8, -2, 4];
console.log(`originalArray: ${arrNums}`);

function bubbleSortAsc(arr) {
	let swapped;
	do {
		swapped = false;

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let elem = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = elem;

				swapped = true;
			}
		}
	} while (swapped);
	return arr;
}
console.log(`AscendinglArray: ${bubbleSortAsc(arrNums)}`); // should return [-6, -2, 4, 8, 20]

// PERSONAL PRACTICE OF DESCENDING BUBBLE SORTING

//  [-6, 20, 8, -2, 4];

function bubbleSortDesc(arr) {
	let swapped;
	do {
		swapped = false;

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < arr[i + 1]) {
				let adjElem = arr[i + 1];

				arr[i + 1] = arr[i];

				arr[i] = adjElem;

				swapped = true;
			}
		}
	} while (swapped);

	return arr;
}

// bubbleSortDesc(arrNusms);

console.log(`descendinglArray: ${bubbleSortDesc(arrNums)}`);

// The Big-O for both algorithms are O(n^2) - Quadratic
