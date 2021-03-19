import Visitor from '../interfaces/Visitor';
import Node from './Node';

export default class BinaryTree {
    root: Node;
    qtdElements: number;

    constructor(keyRoot: number) {
        this.root = new Node(keyRoot);
        this.qtdElements = 0
    }

    insert(key: number): void {
        this.insertTree(key, this.root);
    }

    remove(key: number): void {

    }

    fetch(key: number): void {

    }

    private insertTree(key: number, node: Node): void {
        if(node.getKey() == key) {
            return;
        }

        if(key > node.getKey()) {
            if(node.getRight() == null) {
                node.setRight(new Node(key));
                this.qtdElements++;
                return;
            }
            this.insertTree(key, node.getRight());
        } else {
            if(node.getLeft() == null) {
                node.setLeft(new Node(key));
                this.qtdElements++;
                return;
            }
            this.insertTree(key, node.getLeft());
        }
    }

    accept(visitor: Visitor) {
        visitor.visit(this.root);
    }
}