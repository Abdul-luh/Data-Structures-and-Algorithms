/**
 * Algorithm & Flowchart to find Area and Perimeter of a circle 
 
 
R : Radius of Circle 
AREA : Area of Circle 
PERIMETER : Perimeter of Circle 
 
Algorithm   
Step-1   Start  
Step-2     Input Radius of Circle say R 
Step-3     Area =  22.0/7.0 x R x R 
Step-4     PERIMETER = 2 x 22.0/7.0 x R 
Step-5     Display AREA, PERIMETER 
Step-6   Stop 
 */

function circleArea_Perimeter(r) {
	let area = (22.0 / 7.0) * r * r;
	let perimeter = 2 * (22.0 / 7.0) * r;
	return { area, perimeter };
}

console.log(circleArea_Perimeter(7));
