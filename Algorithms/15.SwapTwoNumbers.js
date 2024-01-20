/**
 * Algorithm & Flowchart to Swap Two Numbers using Temporary Variable 
 
 
Algorithm   
Step-1   Start  
Step-2     Input Two Numbers Say NUM1,NUM2 
Step-3     Display Before Swap Values NUM1, NUM2 
Step-4      TEMP = NUM1 
Step-5      NUM1 = NUM2 
Step-6      NUM2 = NUM1 
Step-7      Display After Swap Values NUM1,NUM 
Step-8   Stop 
 */

function swapTwoNumbersTemp(NUM1, NUM2) {
	console.log("initial", NUM1, NUM2);

	let temp = NUM1;
	NUM1 = NUM2;
	NUM2 = temp;

	console.log("Final", NUM1, NUM2);
}

swapTwoNumbersTemp(2, 9);

console.log("---------------------------------------------------------");

/**
 * Algorithm & Flowchart to Swap Two Numbers without using temporary 
variable 

Algorithm   
Step-1   Start  
Step-2     Input Two Numbers Say A,B 
Step-3     Display Before Swap Values A, B 
Step-4      A = A + B 
Step-5      B = A - B 
Step-6      A = A - B 
Step-7      Display After Swap Values A, B 
Step-8   Stop
*/

function swapTwoNumbers(n1, n2) {
	console.log("initial", n1, n2);
	n1 = n1 + n2;
	n2 = n1 - n2;
	n1 = n1 - n2;

	console.log("final", n1, n2);
}

swapTwoNumbers(12, 28);
