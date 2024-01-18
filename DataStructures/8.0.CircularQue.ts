class CircularQue {
	item: Record<number, string | number>;
	front: number;
	rear: number;
	capacity: number;
	currLen: number;
	constructor(capacity: number) {
		this.item = {};
		this.capacity = capacity;
		this.currLen = 0;
		this.front = 0;
		this.rear = 0;
	}
	enqueue(element: string | number): void {
		this.item[this.rear] = element;
		this.rear++;
	}
	dequeue(): void {
		const deletedItem = this.item[this.front];
		delete this.item[this.front];
		this.front++;
	}
	peek(): string | number {
		if (this.isEmpty()) return "Empty!";
		return this.item[this.front];
	}
	isFull(): boolean {
		return this.rear === 10;
	}
	isEmpty(): boolean {
		return this.rear === 0;
	}
	size(): number {
		return this.rear - this.front;
	}
	print(): void {
		console.log(this.item);
	}
}
