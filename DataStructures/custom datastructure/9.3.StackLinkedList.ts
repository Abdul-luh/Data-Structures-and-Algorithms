import { TailedLinkedList } from "./9.1.TailedLinkedlists";

/*
	STACK USING lINKED lIST
	RECALL: Stack DS uses LIFO principle (last in first out) i.e. Add from one end and remove from that same end
	METHODS: 
	- push
	- pop
	- peek
	- isEmpty
	- getSize
	- print
*/

class StackLinkedList {
	list: TailedLinkedList
	constructor() {
		this.list = new TailedLinkedList()
	}
	
	push(value: string | number) {
		return this.list.prepend(value)
	}

	pop() {
		return this.list.removeFront()
	}

	peek() {
		return this.list.head?.value || null
	}

	isEmpty() {
		return this.list.isEmpty()
	}

	getSize() {
		return this.list.getSize()
	}

	print() {
		return this.list.print()
	}
}


const stack = new StackLinkedList()

console.log('push 20:', stack.push(20));
console.log('push 15:', stack.push(15));
console.log('push 10:', stack.push(10));
console.log('print:', stack.print());
console.log('getSize:', stack.getSize());
// console.log('peek:', stack.peek());
console.log('pop:', stack.pop());
console.log('peek:', stack.peek());
console.log('print:', stack.print());

