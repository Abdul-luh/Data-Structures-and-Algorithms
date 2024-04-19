// Array
// WHAT IS AN ARRAY
/**
    An array is a data structure that can hold a collection of values
  Arrays can contain mixed or different data types. i.e. you can store strings, boolean, numbers, or obejects in the same array
 they are resizeable, you don't have to declare the size of an array 
    js are zero index-based and insertion order is maintained
    arrays are iterables. They can be used with a for of loop
 * 
 */

const arr = [1, 2, 3, "japan"];
// console.log(arr[0]);

// BASIC ARRAY METHODS
// to add to end of an array -> push
arr.push(4); // O(l)

// to add to the beginning of an array -> push
arr.unshift(0);

// to remove from the beginning of an array -> push
arr.shift(); // O(l)

// to remove from the end of an array -> push
arr.pop(); // O(1)

// OTHER ARRAY METHODS
// map, filter, reduce, concate, slice, splice

for (const i of arr) {
	console.log(i);
}
// Array Big-O timee complexity
// insert/remove from begining - O{n}
// access - O{1}
// Search - O{1}
// shift, unshift, concat, slice, splice, forEach, map, filtrer, reduce,  = O(n)
