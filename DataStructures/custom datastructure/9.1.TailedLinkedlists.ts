import {Nodes, NodeType} from "./Node"

export class TailedLinkedList {
	head: NodeType
	tail: NodeType
	private size: number
	constructor() {
		this.head = null
		this.tail = null
		this.size = 0
	}

	getSize() { return this.size };
	isEmpty() {return this.size === 0};
	private isIndexValid(i: number) { return (i < 0 || i >= this.size )};
	private logInvalidIndex(i: number) { console.error("INVALID INDEX OF: ", i); return `INVALID INDEX OF: ${i}` };

	prepend(value: string | number): NodeType {
		/* if list is Empty: 
			tail = node
		   else:
			node.next = head
			
		   head = node
		   size++
		*/
		const node = new Nodes(value)
		if (!this.isEmpty()) {
			node.next = this.head
		} else {
			this.tail = node			
		}
		this.head = node
		this.size++
		return node
	}

	append(value: string | number) {
		if (this.isEmpty()) {
			return this.prepend(value)
		}
		const node = new Nodes(value)
		this.tail!.next = node
		this.tail = node
		this.size++
		return node
	}

	removeFront() {
		if (this.isEmpty()) return 
		
		let removed = this.head;
		this.head = this.head!.next
		this.size--
		// console.log(this.head, this.tail)
		return removed;
	}

	removeEnd() {
		if (this.isEmpty()) return null
		let removedNode = this.tail
		if (this.size === 1) {
			this.head = null
			this.tail = null
		} else {
			let prev = this.head
			while (prev && prev.next !== this.tail) {
				prev =  prev.next
			}
			this.tail = prev
			prev!.next = null
		}
		this.size--
		return removedNode
	}

	print(): string {
		let list = ""
		let curr = this.head
		while (curr) {
			list += ` ${curr.value}`
			curr = curr.next
		}
		return list;
	}
}
