/**
 * Algorithm & Flowchart to convert temperature from Fahrenheit to Celsius 
 
 
C :  temperature in  Celsius 
F :  temperature  Fahrenheit 
 
Algorithm   
Step-1   Start  
Step-2     Input temperature in Fahrenheit say F 
Step-3     C =  5.0/9.0 (F - 32 ) 
Step-4     Display Temperature in Celsius C 
Step-5   Stop
 */

function fahrenhietToCel(f) {
	let C = (5.0 / 9.0) * (f - 32);
	return C + "℃";
}

console.log(fahrenhietToCel(32));
console.log(fahrenhietToCel(100));
console.log(fahrenhietToCel(38));
