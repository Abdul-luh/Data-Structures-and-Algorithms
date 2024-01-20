/**
 * Algorithm & Flowchart to convert temperature from Celsius to Fahrenheit 
 
 
C :  temperature in  Celsius 
F :  temperature  Fahrenheit 
 
Algorithm   
Step-1   Start  
Step-2     Input temperature in Celsius say C 
Step-3     F =  (9.0/5.0 x C) + 32 
Step-4     Display Temperature in Fahrenheit F 
Step-5   Stop
 */

function celciusToF(C) {
	let F = (9.0 / 5.0) * C + 32;
	return F + "℉";
}

console.log(celciusToF(0));
console.log(celciusToF(32));
console.log(celciusToF(100));
