//  MAPS
// This is the last built in data structure
/**
 * Map is an ordered collection of key: value pairs, both key and values can be of any data type
 * To retrieve a value you can use a corresponding key
 * Maps are iterables. They can be used with for of loops
 */

// DIFFERENCES BETWEEN MAPS AND OBJECTS
/*
----------------------------------------------------------------------------------------------------------------------------
|        OBJECTS                                 |        MAPS                                                              |
----------------------------------------------------------------------------------------------------------------------------
  -  They are unordered                         |- They are ordered
  ----------------------------------------------------------------------------------------------------------------------------
  -  keys can only be string and symbol type    |- keys can be of any type
  ----------------------------------------------------------------------------------------------------------------------------
  -  objects has a prototype and may contain    |- maps don't have default keys
     default keys which may collide with your   |
     own keys if your not careful               |
  ----------------------------------------------------------------------------------------------------------------------------
  -  They are not iterable                      |- They are iterables
  ----------------------------------------------------------------------------------------------------------------------------
  -  The number of items is manually determined |- The numbers of items is readily available with the size property
  ----------------------------------------------------------------------------------------------------------------------------
  -  functionality can be attached to it        |- they are restricted to just storing data
  ----------------------------------------------------------------------------------------------------------------------------
*/

const map = new Map([
	["a", 1],
	["b", 2],
]);

map.set("c", 3); // to add a new value to the map
console.log(map.has("a")); // to check if a value exists in the map
map.delete("c"); // to add a new value to the map
console.log(map.size);
map.clear();

for (const [key, value] of map) {
	console.log(`${key}: ${value}`);
}
