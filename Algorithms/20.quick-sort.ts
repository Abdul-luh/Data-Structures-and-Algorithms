export default function QSortAsc(arr: Array<number>): number[] {
	if (arr.length < 2) return arr;
	let pivot = arr[arr.length - 1];
	let left: Array<number> = [];
	let right: Array<number> = [];

	for (let i = 0; i < arr.length - 1; i++) {
		arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
	}

	return [...QSortAsc(left), pivot, ...QSortAsc(right)];
}
