import Visitor from '../interfaces/Visitor';
import Node from './Node';

export default class DisplayPostOrderVisitor implements Visitor {
    public visit(node: Node) {
        if(node == null)
            return;
        
        this.visit(node.getLeft());
        this.visit(node.getRight());
        console.log(node);
    }
}