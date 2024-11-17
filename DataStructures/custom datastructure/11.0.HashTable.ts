/* 
	HASHTABLES
	Hashtables are basically a custom implimentation of maps or object datastructure
	OPERATIONS:
	- set
	- get
	- remove
	
	METHODS:
	- set
	- get
	- remove
	- hashing function
	
*/

class Hashtables {
	size: number;
	table: Array<undefined | string | number>;
	constructor(size: number) {
		this.size = size;
		this.table = new Array(size);
	}

	hash(key: string) {
		let total = 0;
		for (let i = 0; i <= key.length; i++) {
			total += key.charCodeAt(i);
		}
		return total % this.size;
	}

	set(key: string, value: string) {
		const i = this.hash(key);
		this.table[i] = value;
	}

	get(key: string) {
		const i = this.hash(key);
		return this.table[i];
	}

	remove(key: string) {
		const i = this.hash(key);
		if (!this.table[i]) return null;
		this.table[i] = undefined;
	}

	display() {
		let allItems: Array<string> = [];
		for (let i = 0; i <= this.size; i++) {
			if (this.table[i]) {
				allItems = [...allItems, [i, this.table[i]]];
			}
		}
		return allItems;
	}
}

const table = new Hashtables(50);

console.log("set: ", table.set("au", "australia"));
console.log("set: ", table.set("am", "america"));
console.log("set: ", table.set("ng", "nigeria"));
console.log("display: ", table.display());
