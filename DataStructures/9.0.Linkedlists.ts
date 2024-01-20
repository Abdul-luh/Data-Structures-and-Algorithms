class Nodes {
	value: Nodes | number | string | null;
	next: Nodes | null;
	constructor(value: string | number) {
		this.value = value;
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

	// O(1)
	prepend(value: number | string) {
		const node = new Nodes(value);
		if (this.isEmpty()) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		this.size++;
		return this.head;
	}

	// O(n)
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

	print() {
		if (this.isEmpty()) {
			console.log("Empty List!");
			return "Empty List!";
		} else {
			let curr = this.head;
			let listValue = "";
			while (curr) {
				listValue += `${curr.value} `;
				curr = curr.next;
			}
			console.log(listValue);
			return listValue;
		}
	}
}
const list = new LinkedList();

console.log("List size is: ", list.getSize());
console.log("Is link empty? ", list.isEmpty());
console.log("\n ---------------------------------------------\n");
console.log("Prepend ", list.prepend(10));
console.log("Prepend ", list.prepend(20));
console.log("Print ", list.print());
console.log("\n ---------------------------------------------\n");
console.log("append ", list.append(30));
console.log("append ", list.append(40));
console.log("Print ", list.print());
