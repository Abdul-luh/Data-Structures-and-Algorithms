// Insertion Sort

/*
<PROBLEM STATEMEN>

 Given and array of integers, sort the array.
 const arr = [-6, 20, 8, -2, 4]
 bubbleSort(arr) => should return [-6, -2, 4, 8, 20]
 
 
 Understanding the Idea Behind Bubble Sort

 You virtually split the array into a sorted and an unsorted part

 We assume that the first element is already sorted and the remaining elements are unsorted
 
 Then select and unsorted element and compare with all elements in the sorted part

 if the elements in the sorted part is smaller than the element in the unsorted part, proceed to the next element in the unsorted part. Else shift larger element in the sorted part towards the right 

 Then insert the selected element at the right index ensuring the sorted part remains that way

 finally repeat till all the sorted elements are placed in the right order
 
 */

const arrNums = [-6, 20, 8, -2, 4];

function insertionSortAsc(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}

		arr[j + 1] = numberToInsert;
	}
	return arr;
}

console.log(insertionSortAsc(arrNums));

// function insertionSortDesc(arr) {
// 	for (let i = 1; i < arr.length; i++) {
// 		let numberToInsert = i;
// 		let j = i - 1;
// 		while (j >= 0 && arr[j] < numberToInsert) {
// 			arr[j + 1] = arr[j];
// 			j = j - 1;
// 		}
// 		arr[j] = numberToInsert;
// 	}
// 	return arr;
// }

// insertionSortDesc(arrNums);

// Personal Comment: i haven't got the hang of it 😥😥😪
