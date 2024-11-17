type enqResType = {
	currLen: number;
	index: number;
	insertedValue: string | number | null;
};
type deqResType = { deletedItem: string | number | null };

class CircularQue {
	private items: Record<number, string | number | null>;
	private capacity: number;
	private front: number;
	private rear: number;
	private currLen: number;

	constructor(capacity: number) {
		this.items = {};
		this.capacity = capacity;
		this.front = -1;
		this.rear = -1;
		this.currLen = 0;
	}

	isFull(): boolean {
		return this.currLen === this.capacity;
	}
	isEmpty(): boolean {
		return this.currLen === 0;
	}
	size(): number | null {
		return !this.isEmpty ? this.currLen : null;
	}
	peek(): string | null {
		return !this.isEmpty ? `{${this.front}: ${this.items[this.front]}}` : null;
	}
	enqueue(elem: number | string): enqResType | "Que Full!" {
		if (this.isFull()) return "Que Full!";
		this.rear = (this.rear + 1) % this.capacity;
		this.items[this.rear] = elem;
		this.currLen++;
		if (this.front === -1) this.front = this.rear;

		const res = {
			currLen: this.currLen,
			index: this.rear,
			insertedValue: this.items[this.rear],
		};

		return res;
	}
	dequeue(): deqResType | null {
		if (this.isEmpty()) return null;
		const deletedItem = this.items[this.front];
		this.items[this.front] = null;
		this.front = (this.front - 1) % this.capacity;
		this.currLen--;
		if (this.isEmpty()) this.rear = this.front = -1;
		return { deletedItem };
	}

	print() {
		const returnValue = this.isEmpty() ? null : this.items
		console.log(returnValue);
		return returnValue;
	}
}

const que = new CircularQue(3);

console.log(que.enqueue("one"));
console.log(que.enqueue("two"));
console.log(que.enqueue("three"));
que.print();
console.log("size:", que.size());
console.log("isFull:", que.isFull());
console.log("isEmpty:", que.isEmpty());
console.log(que.dequeue());
que.print();

console.log(que.enqueue("four"));
que.print();

console.log(que.peek());
console.log(que.enqueue("five"));
console.log(que.enqueue("six"));
console.log(que.enqueue("seven"));
 