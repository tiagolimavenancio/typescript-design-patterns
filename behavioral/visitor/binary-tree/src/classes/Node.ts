export default class Node {
    private key: number;
    private left: Node;
    private right: Node;

    constructor(key: number) {
        this.key = key;        
    }

    public toString(): string {
        return `${this.key}`;
    }

    public getKey(): number {
        return this.key;
    }

    public getLeft(): Node {
        return this.left;
    }

    public setLeft(left: Node) {
        this.left = left;
    }

    public getRight(): Node {
        return this.right;
    }

    public setRight(right: Node) {
        this.right = right;
    }

}