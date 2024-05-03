// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

/*
 Waiting:frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
 Waiting:frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].
 Waiting:frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].
 Waiting:All elements from the first array should be added to the second array in their original order. frankenSplice([1, 2, 3, 4], [], 0) should return [1, 2, 3, 4].
 Waiting:The first array should remain the same after the function runs.
 Waiting:The second array should remain the same after the function runs. 
*/
type strumber = Array<string | number>;

function frankenSplice(arr1: strumber, arr2: strumber, n: number) {
	let newArr = arr2.slice();
	newArr.splice(n, 0, ...arr1);
	console.log(newArr);
	return newArr;
}

frankenSplice([1, 2], ["a", "b"], 1);
