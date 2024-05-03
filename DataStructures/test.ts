function confirmEnding(str: string, target: string) {
	return str.slice(-target.length) === target;
}

const str2 = "JavaScript";
const target2 = "Script";
const result2 = confirmEnding(str2, target2);

console.log(result2);
