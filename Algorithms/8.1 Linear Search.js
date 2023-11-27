// <Problem Statement>
// Given an array of 'n' element and a target element 't', find the index of 't' in the array.
//Return >>>
/*
    > -1 if the target element is not found.
    arr = [-5, 2, 10, 4, 6], t = 10 -> should return 2
    arr = [-5, 2, 10, 4, 6], t = 6 -> should return 4
    arr = [-5, 2, 10, 4, 6], t = 20 -> should return -1
 */

const arrNums = [-5, 2, 10, 4, 6];

// function linearSearch(arr, t) {
// 	return arr.indexOf(t);
// }

function linearSearch(arr, t) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === t) return i;
	}
	return -1;
}

console.log(linearSearch(arrNums, 10));
console.log(linearSearch(arrNums, 6));
console.log(linearSearch(arrNums, 20));

// Big-O = O(n)
