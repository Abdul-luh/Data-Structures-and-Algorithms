// This is a much better and efficient way to achieve a queue data structure
type ItemType = Record<number, string | number>;
class Que {
	private items: ItemType;
	private front: number;
	private rear: number;
	constructor() {
		this.items = {};
		this.front = 0;
		this.rear = 0;
	}
	isEmpty(): boolean {
		return this.rear - this.front === 0;
	}
	peek(): string | number {
		if (!this.isEmpty) {
			return this.items[this.front];
		}
		return "Empty";
	}
	size(): number {
		return this.rear - this.front;
	}
	enqueue(val: number | string): string {
		this.items[this.rear] = val;
		this.rear++;
		return `{'${this.rear - 1}': ${val}}`;
	}
	dequeue() {
		const unshiftedItem = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return unshiftedItem;
	}
	print() {
		console.log(this.items);
	}
}

let myQue = new Que();

console.log(myQue.isEmpty());
console.log(myQue.peek());
console.log(myQue.size());

console.log(myQue.enqueue("hello"));
console.log(myQue.enqueue("world"));
console.log(myQue.enqueue(1));
console.log(myQue.enqueue(2));
console.log(myQue.enqueue(3));

console.log(myQue.size());

myQue.print();

console.log(myQue.dequeue());

myQue.print();

console.log(myQue.isEmpty());
console.log(myQue.peek());
