type valType = Nodes | string | number;
class Nodes {
	value: Nodes | string | number | null;
	next: Nodes | string | number | null;
	constructor(val: string | number) {
		this.value = val;
		this.next = null;
	}
}

class LinkedList {
	head: Nodes | null;
	size: number;
	constructor() {
		this.head = null;
		this.size = 0;
	}
	isEmpty() {
		return this.size === 0;
	}
	getSize() {
		return this.size;
	}
	// prepend(Nodes: Nodes): Nodes;
	// prepend(val: string | number) {
	// 	const node = new Nodes(val);
	// 	if (!this.isEmpty()) {
	// 		node.next = this.head;
	// 	} else {
	// 		node.next = null;
	// 	}
	// 	this.head = node;
	// 	this.size++;
	// 	return this.head;
	// }
	append(value: string | number) {
		const node = new Nodes(value);
		let prev = this.head;

		if (this.isEmpty()) {
			prev = node;
		} else {
			while (prev?.next) prev = prev.next;
			prev ? (prev.next = node) : (this.head = node);
		}
		this.size++;
		return prev;
	}
	insert(val: string | number, i: number) {}
	removeFrom(i: number) {}
	print() {
		if (this.isEmpty()) {
			console.log(null);
		} else {
			let curr = this.head;
			let listValues = "";
			while (curr) {
				listValues += `${curr.value} `;
				curr = curr?.next;
			}
			console.log(listValues);
		}
	}
}

const list = new LinkedList();

console.log("List size is: ", list.getSize());
console.log("Is link empty? ", list.isEmpty());
console.log("\n ---------------------------------------------\n");
// console.log("Prepend ", list.prepend(10));
// console.log("Prepend ", list.prepend(20));
console.log("Print ", list.print());
console.log("\n ---------------------------------------------\n");
console.log("append ", list.append(30));
console.log("append ", list.append(40));
console.log("Print ", list.print());
console.log("\n ---------------------------------------------\n");
console.log("insert(50, 0)");
list.insert(50, 0);
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());
console.log("\n ---------------------------------------------\n");
console.log("insert(60, 3)");
list.insert(60, 3);
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());
console.log("\n ---------------------------------------------\n");
console.log("remove", list.removeFrom(3));
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());
