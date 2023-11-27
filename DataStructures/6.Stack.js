//STACK DATA STRUCTURE
/**
 * The stack data structure is a sequential collection of elements that follows the principle of Last In First Out(LIFO), this means, the last element inserted into the stack is the first element to be removed
 * ANALOGY: A stack of plates, the last plate placed on top of the stack is also the first to be removed from the stack.
 * Stack is an abstract data type. It is defined by its behaviour rather than being a mathematical model. 
 * Stack support two main operations [push(element) and pop()]
 * 
 ----- STACK USAGE-----
 Typically a stack is great when you have to trace back your steps
 * Browser history tracking : the go back and forward buttons in the browser makes use of a stack data structure
 * Undo operation when typing
 * expression conversions
 * call stack used in javascript runtim:
 
  ----- STACK IMPLEMENTAION -----
  >> push(element)- add an element to the top of the stack
  >> pop()- remove an element to the top of the stack
  >> peek()- get the value of the top element without removing it
  >> isEmpty()- check if stack is empty
  >> size()- check if stack is empty
  >> print()- visualize the elements in the stack
 
 */

class Stack {
	constructor() {
		this.items = [];
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	size() {
		return this.items.length;
	}

	print() {
		console.log(this.items.toString());
	}
}

const stack = new Stack();
// console.log(stack.isEmpty());

stack.push(20);
stack.push(10);
stack.push(30);

console.log(stack.size());
stack.print();

console.log(stack.pop());
console.log(stack.peek());
