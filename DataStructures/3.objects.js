/*
 *
 * An object is an ordered collolection of key value pairs
 * The key must either be a string or any data type
 * To retrieve a value you can use the corresponding key, this can be achieve using dot notation or bracket notation
 * unlike an array an Object is not an iterable, it can't be used with for of loop
 */

const obj = {
	name: "bruce",
	age: 35,
	sayMyName() {
		console.log(this.name);
	},
};

obj.hobby = "football";
delete obj.hobby;

console.log(obj);
console.log(obj.name);
console.log(obj["age"]);
// console.log(obj.sayMyName());

console.log(obj.keys());

// object.keys .values .entries
/**
 * object.keys() returns all the keys present in an object
 * object.values() returns all the values present in an object
 * object.entries() returns all the key: value pairs present in an object
 */

// OBJECT - BIG-O TIME COMPLEXITY
/**
 * insert - O(1)
 * remove - O(1)
 * access - O(1)
 * search - O(n)
 * obj.keys() - O(n)
 * obj.values() - O(n)
 * obj.entries() - O(n)
 */
