import { TailedLinkedList } from "./9.1.TailedLinkedlists";

/*
	QUEUE DS using TailedLinkedList
	RECALL:	Queue DS uses the FIFO principle (first in first out) i.e. insert from one end and remove from the other end
	Adding to the end is the Enqueue operation and removing from the start is the dequeue operation.
	METHODS:
	- Enqueue
	- Dequeue
	- peek
	- isEmpty
	- getSize
	- print- peek
	- isEmpty
	- getSize
	- print
 */

class QueLinkedList {
	list: TailedLinkedList
	constructor() {
		this.list = new TailedLinkedList()
	}
	enqueue(value: string | number) {
		return this.list.append(value)
	}

	dequeue() {
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

const Queue = new QueLinkedList()

console.log('enqueue 20:', Queue.enqueue(20));
console.log('enqueue 15:', Queue.enqueue(15));
console.log('enqueue 10:', Queue.enqueue(10));
console.log('print:', Queue.print());
console.log('getSize:', Queue.getSize());
console.log('peek:', Queue.peek());
console.log('dequeue:', Queue.dequeue());
console.log('peek:', Queue.peek());
console.log('print:', Queue.print());
