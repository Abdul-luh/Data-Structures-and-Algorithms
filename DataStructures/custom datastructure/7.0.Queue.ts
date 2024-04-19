//QUEUE
/*
    The queue data structure is a sequential collection of elements that follows the principle of first in first our (FIFO)
    This means the first element inserted into the queue is the first element to be removed
    A common analogy is a queue of people waiting in line. People enter at one end (rear/tail) and leaves from the other end (front/head)
    Queue similar to stack data structure is an abstract data type. It is defined by itsbehaviour rather than being a mathematical model

    The queue data structure supports two main operations 
    Enqueue: which add an element to the rear/tail of the collection
    Dequeue: which removes/deletes an element from the front/head of the collection

    -- QUEUE USAGE --
    Printers: when you try to print multiple documents
    CPU task scheduling
    callback queue in javascript run time
    # IMPLEMENTATION #
    enqueue(element): add an element to the queue
    dequeue(): remove the oldest element from the queue
    peek(): get the value of the first element without removing it
    isEmpty(): to check if the queue is empty
    size(): get the number of size in the queue
    print(): to visualize the elements in the queue
*/

class Queue {
	items: Array<string | number>;
	constructor() {
		this.items = [];
	}
	enqueue(element: string | number) {
		this.items.push(element);
	}
	dequeue() {
		return this.items.unshift();
	}
	isEmpty() {
		return this.items.length === 0;
	}
	size() {
		return this.items.length;
	}
	peek() {
		if (this.isEmpty()) return "empty";
		return this.items[0];
	}
	print() {
		console.log(this.items.toString());
	}
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.size());

queue.enqueue("hello");
queue.enqueue("world");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.size());

queue.print();

queue.dequeue();

queue.print();

console.log(queue.isEmpty());
console.log(queue.peek());

// NOTE THAT SHIFT METHOD IN ARRAY USING QUEUE DS HAS A LINEAR TIME COMPLEXITY O(n), therefore this is not an optimized datastructure
