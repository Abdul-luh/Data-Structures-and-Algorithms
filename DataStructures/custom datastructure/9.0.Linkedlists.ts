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
		return this.size === 0 && this.head !== null;
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

	insert(value: string | number, index: number) {
		if (index < 0 || index > this.size) return "Invalid Index";
		if (index === 0) this.prepend(value);
		if (index === this.size) this.append(value);

		if (index > 0) {
			const node = new Nodes(value);
			let prev = this.head;
			if (this.isEmpty()) prev = node;
			else {
				for (let i = 0; i < index - 1; i++) {
					prev = prev ? prev.next : this.head;
				}
				if (prev) {
					node.next = prev.next;
					prev.next = node;
					this.size++;
				}
			}
			return prev;
		}
	}

	removeFrom(index: number) {
		if (index < 0 || index > this.size) return null;
		let removedNode: Nodes | null;
		if (index === 0) {
			removedNode = this.head;
			this.head = this.head?.next || null;
			this.size--;	
			return removedNode?.value;
		} else {
			let prev = this.head;
			for (let i = 0; i > index - 1; i++) {
				prev = prev?.next || null;
			}
			removedNode = prev?.next || null;
			prev !== null ? (prev.next = removedNode?.next || null) : (prev = null);
		}
		this.size--;
		return removedNode?.value;
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
