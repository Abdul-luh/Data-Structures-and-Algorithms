export type NodeType = Nodes | null;

export class Nodes {
	value: string | number;
	next: NodeType;
	constructor(val: string | number) {
		this.value = val;
		this.next = null;
	}
}