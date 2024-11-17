import {Nodes, NodeType} from "./Node"

class LinkedList {
	head: NodeType;
	size: number;

	constructor() {
		this.head = null;
		this.size = 0;
	}

	getSize() { return this.size };
	isEmpty() {return this.size === 0};
	logInvalidIndex(i: number) { console.error("INVALID INDEX OF: ", i); return `INVALID INDEX OF: ${i}` };
	isIndexValid(i: number) { return (i < 0 || i >= this.size )};

	prepend(val: string | number): Nodes {
		const node = new Nodes(val);
		if (!this.isEmpty()) {
			node.next = this.head;
		} else {
			node.next = null;
		}
		this.head = node;
		this.size++;
		return this.head;
	}

	append(value: string | number): Nodes | null {
		const node = new Nodes(value);

		if (this.isEmpty()) {
			this.head = node;
			this.size++;
		return this.head;
		} 
		let prev = this.head;
		while (prev?.next) {
			prev = prev?.next
		};
		prev!.next = node
		
		this.size++;
		return prev;
	}

	insert(val: string | number, index: number) {
		if (this.isIndexValid(index)) {
			this.logInvalidIndex(index)
			return null
		}
		if(!val) return "PASS A VALUE, YOU BLOODY RETARD!"
		if (index === 0) {
			return this.append(val)
		}
		let node = new Nodes(val)
		let prev = this.head

		for (let i = 0; i < index - 1; i++) {
			node.next = prev!.next
		}
		prev!.next = node

		this.size++
		return prev?.next
	}
	
	removeFrom(index: number) {
		if (this.isIndexValid(index)) {
			this.logInvalidIndex(index)
			return null
		}
		
		let rem = this.head;
		if (index === 0) {
			this.head = rem!.next
		}

		let prev = this.head
		for (let i = 0; i < index - 1; i++){
			prev = prev!.next
		}
		rem = prev!.next;
		prev!.next = rem!.next;
		this.size--
		return rem?.value
	}
	
	removeValue(val: string | number) {
		if (!val) return 'PLEASE INPUT A VALUE YOU DUMB CUNT!';
		if (this.isEmpty()) return null;

		if (this.head?.value === val) {
			this.head = this.head.next
			this.size--
			return val;
		}

		let prev = this.head;

		while (prev?.next) {
			let rem = prev.next
			if (rem.value === val) {
				prev.next = rem.next
				this.size--
				return	rem.value
			}
			prev = prev.next
		}
		return null;
		
	}
	
	search(value: string | number) {
		if (this.isEmpty()) return 'EMPTY LIST!';

		let i = 0
		let prev = this.head
		while (prev) {
			if (prev.value === value) {
				return `index ${i}`
			}
			prev = prev.next
			i++
		}
		return -1
	} 

	reverse() {
		let prev : NodeType = null;
		let curr = this.head;
		while (curr) {
			let next = curr.next
			curr.next = prev
			prev = curr;
			curr = next;
		}
		this.head = prev
		return this.print()
	}

	print() {
		if (this.isEmpty()) {
			console.log(null);
		} else {
			let curr = this.head;
			let listValues = "";

			while (curr) {
				listValues += `${curr.value} `;
				curr = curr.next;
			}
			// console.log(listValues);
			return listValues;
		}
	}
}

const list = new LinkedList();

console.log("List size is: ", list.getSize());
console.log("Is link empty? ", list.isEmpty());

console.log("\n ---------------------------------------------\n");
console.log("Prepend ", list.prepend(10));
console.log("Prepend ", list.prepend(20));
console.log("Print: ", list.print());
console.log("List size is: ", list.getSize());

console.log("\n ---------------------------------------------\n");
console.log("append ", list.append(30));
console.log("append ", list.append(40));
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());

console.log("\n INSERTION ---------------------------------------------\n");
console.log("insert(50, 0)", list.insert(50, 0));
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());

console.log("\n ---------------------------------------------\n");
console.log("insert(60, 3)", list.insert(60, 3));
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());

console.log("\n REMOVE-INDEX ---------------------------------------------\n");
console.log("remove index 3", list.removeFrom(3));
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());

console.log("\n REMOVE-VALUE ---------------------------------------------\n");
console.log("remove value 50", list.removeValue(50));
console.log("Print ", list.print());
console.log("List size is: ", list.getSize());

console.log("\n SEARCH ---------------------------------------------\n");
console.log("search value 10: ", list.search(10));

console.log("\n REVERSE ---------------------------------------------\n");
console.log("reverse list: ", list.reverse());