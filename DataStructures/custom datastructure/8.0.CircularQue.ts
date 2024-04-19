type enqRes = {
	currLen: number;
	index: number;
	insertedValue: string | number | null;
};
type deqRes = { deletedItem: string | number | null };

class CircularQue {
	capacity: number;
	front: number;
	rear: number;
	currLen: number;
	items: Record<number, string | number | null>;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.front = -1;
		this.rear = -1;
		this.currLen = 0;
		this.items = {};
	}

	isFull(): boolean {
		return this.currLen === this.capacity;
	}

	isEmpty(): boolean {
		return this.currLen === 0;
	}

	enqueue(item: number | string): string | void | enqRes {
		if (this.isFull()) return "Que Full!";
		this.rear = (this.rear + 1) % this.capacity;
		this.items[this.rear] = item;
		this.currLen += 1;
		if (this.front === -1) this.front = this.rear;

		const res = {
			currLen: this.currLen,
			index: this.rear,
			insertedValue: this.items[this.rear],
		};

		return res;
	}

	dequeue(): string | deqRes {
		if (this.isEmpty()) return "Que Empty!";
		const deletedItem = this.items[this.front];
		delete this.items[this.front];
		this.front = (this.front + 1) % this.capacity;
		this.currLen -= 1;
		if (this.isEmpty()) {
			this.front = this.rear = -1;
		}
		const res = { deletedItem };
		return res;
	}

	peek(): string | { firstItem: string | number | null } {
		if (this.isEmpty()) return "Que Empty";
		const res = { firstItem: this.items[this.front] };
		return res;
	}

	size() {
		if (this.isEmpty()) return "Que Empty";
		return this.currLen;
	}

	print(): void {
		if (this.isEmpty()) {
			console.log("Que Empty");
			return;
		}

		console.log(this.items);
	}
}

const que = new CircularQue(3);

que.enqueue("one");
que.enqueue("two");
console.log(que.enqueue("three"));
que.print();
console.log("size", que.size());
// console.log(que.isFull());
// console.log(que.isEmpty());
que.dequeue();
que.print();

console.log(que.enqueue("four"));
que.print();

// console.log(que.peek());
