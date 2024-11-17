import {
	TailedLinkedList
} from "./9.1.TailedLinkedlists";
 
const tailedList = new TailedLinkedList()

console.log('prepend: 20', tailedList.prepend(20));
console.log('prepend: 10', tailedList.prepend(10));
// console.log('append 30:', tailedList.append(30));
// console.log('append 40:', tailedList.append(40));
// console.log('removeFront:', tailedList.removeFront());
console.log('removeEnd:', tailedList.removeEnd());

console.log('print tailedList', tailedList.print());
console.log('size:', tailedList.getSize());

