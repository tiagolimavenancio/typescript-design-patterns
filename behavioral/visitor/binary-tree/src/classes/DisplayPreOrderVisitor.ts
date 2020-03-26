import Visitor from '../interfaces/Visitor';
import Node from './Node';

export default class DisplayPreOrderVisitor implements Visitor {
    public visit(node: Node) {
        if(node == null)
            return;
        
        console.log(node);
        this.visit(node.getLeft());
        this.visit(node.getRight());
    }
}