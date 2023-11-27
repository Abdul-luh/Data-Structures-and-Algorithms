//SET DATA STRUCTURES
/**
 * A set is a data structure that can collection of values, the values however must be unique
 * They can contain a mix of data types, [strings, boolean, numbers, objects] all in the same set
 * Sets are also dynamically sized as you don't have to declare the size before creating it
 * sets Do not maintain inserion order: an item inserted first doesn't mean it is the first element in the set
 * They are iterable, they can be used with for of loops
 */

// DIFFERENCES BETWEEN SETS AND ARRAYS
/*
        SET                                 |        ARRAYS
    Can't contain duplicates                | can contain duplicates
    Insertion order is not maintained       | insertion order is maintained
    searching and deleting is faster        | compared to arrays

*/

const set = new Set([1, 2, 3]);

set.add(4); // to add/insert a new values
set.add(4); // if duplicate is added it will be ignored in a set
console.log(set.has(4)); // to check if a value exists
set.delete(3); // to delete a value in a set
console.log(set.size); // to check length/size of a set
set.clear(); // to delete all values in a set

for (const i of set) {
	console.log(i);
}
