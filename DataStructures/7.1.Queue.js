class Queue {
	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}

	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}

	dequeue() {
		const deletedItem = delete this.items[this.front];
		this.front++;
		return deletedItem;
	}

	isEmpty() {
		return this.rear - this.front === 0;
	}

	peek() {
		if (!this.isEmpty()) {
			return this.items[this.front];
		}
		return "Empty!";
	}

	size() {
		return this.rear - this.front;
	}

	print() {
		console.log(this.items);
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
