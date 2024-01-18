class Que {
	rear: number;
	front: number;
	items: Record<number, string | number>;

	constructor() {
		this.items = {};
		this.rear = 0;
		this.front = 0;
	}

	enqueue(element: string | number): void {
		this.items[this.rear] = element;
		this.rear++;
	}

	dequeue(): string | number | undefined {
		if (this.isEmpty()) {
			return undefined;
		}
		const deletedItem = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return deletedItem;
	}

	isEmpty(): boolean {
		return this.rear - this.front === 0;
	}

	peek(): string | number {
		if (!this.isEmpty()) {
			return this.items[this.front];
		}
		return "Empty!";
	}

	size(): number {
		return this.rear - this.front;
	}

	print(): void {
		console.log(this.items);
	}
}

let myQueue = new Que();

console.log(myQueue.isEmpty());
console.log(myQueue.peek());
console.log(myQueue.size());

myQueue.enqueue("hello");
myQueue.enqueue("world");
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.size());

myQueue.print();

myQueue.dequeue();

myQueue.print();

console.log(myQueue.isEmpty());
console.log(myQueue.peek());
