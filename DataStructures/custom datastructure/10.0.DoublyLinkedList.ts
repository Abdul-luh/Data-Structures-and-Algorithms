type DoublyNodeType = DoublyNode | null;

class DoublyNode {
	value: string | number;
	next: DoublyNodeType
	prev: DoublyNodeType
	constructor(value: string | number) {
		this.value = value;
		this.next = null
		this.prev = null
	}
}

class DoublyLinkedList {
	head: DoublyNodeType;
	tail: DoublyNodeType;
	size: number;
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	getSize() { return this.size };
	isEmpty() {return this.size === 0};
	private isIndexValid(i: number) { return (i < 0 || i >= this.size )};
	private logInvalidIndex(i: number) { console.error("INVALID INDEX OF: ", i); return `INVALID INDEX OF: ${i}` };

	prepend(value: string | number) {
		const node = new DoublyNode(value)
		if (this.isEmpty()) {
			this.tail = node
			node.next = node.prev = null
		}
		else {
			node.next = this.head
			this.head!.prev = node
		}
		this.head = node
		this.size++
		return node;
	}

	append(value: string | number) {
		if (this.isEmpty()) {
			return this.prepend(value)
		}
		// if (this.getSize() === 1) 
		const node = new DoublyNode(value)
		node.prev = this.tail
		this.tail!.next = node
		this.tail = node
		this.size++
		return node;
	}

	removeFront() {
		if (this.isEmpty()) return null
		const removedNode = this.head
		if (this.getSize() === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = removedNode!.next
			this.head!.prev = null
		}
		this.size--
		return removedNode
	}

	removeEnd() {
		if (this.isEmpty()) return null
		const removedNode = this.tail
		if (this.getSize() === 1) {
			this.removeFront()
		} else {
			this.tail = removedNode!.prev
			this.tail!.next = null
		}
		this.size--
		return removedNode
	}

	insert(value: string | number, index: number) {

	}

	print() {
		if (this.isEmpty()) {
			return null;
		}  
			let curr = this.head;
			let listValues = "";

			while (curr) {
				listValues += `${curr.value} `;
				curr = curr.next;
			}
			// console.log(listValues);
			return listValues;
		
	}

	reverse() {
		let curr = this.head
		let prev: DoublyNodeType = null;
		// curr = tail
		// prev = curr 
		// 
		// curr = next
		while (curr) {
			let next = curr.next
			curr.next = prev
			prev = curr;
			curr = next;
		}
		let prevHead = this.head
		this.tail = prevHead
		this.head = this.tail
		console.log(this.head)
		return this.print()
	}

	printReverse() {
		let curr = this.tail
		let list = ""
		while (curr) {
			list += ` ${curr.value}`
			 curr = curr.prev
		}
		return list
	}

}

const DoublyList = new DoublyLinkedList()

console.log("prepend 30:", DoublyList.prepend(30));
console.log("prepend 20:", DoublyList.prepend(20));
console.log("prepend 10:", DoublyList.prepend(10));
// console.log("append 40:", DoublyList.append(40));
// console.log("append 50:", DoublyList.append(50));
// console.log("print:", DoublyList.print());
// console.log("removeFront:", DoublyList.removeFront());
// console.log("removeEnd:", DoublyList.removeEnd());
// console.log("print:", DoublyList.print());
console.log("reverse:", DoublyList.reverse());
// console.log("printReverse:", DoublyList.printReverse());
