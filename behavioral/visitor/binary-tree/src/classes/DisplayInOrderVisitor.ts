import Visitor from '../interfaces/Visitor';
import Node from './Node';

export default class DisplayInOrderVisitor implements Visitor {
    public visit(node: Node) {
        if(node == null)
            return;
        
        this.visit(node.getLeft());
        console.log(node);
        this.visit(node.getRight());
    }
}