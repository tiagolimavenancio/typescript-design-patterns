import Visitor from '../interfaces/Visitor';
import Node from './Node';

export default class DisplayIndentedVisitor implements Visitor {

    public visit(node: Node) {
        if(node == null) {
            return;
        }

        console.log(node);
        this.visitIndented(node.getLeft(), 1);
        this.visitIndented(node.getRight(), 1);
    }

    private visitIndented(node: Node, qtdSpaces: number) {
        if(node == null) {
            return;
        }

        for(let i = 0; i < qtdSpaces; i++) {
            console.log('-')    
        }

        console.log(node);
        this.visitIndented(node.getLeft(), qtdSpaces+1);
        this.visitIndented(node.getRight(), qtdSpaces+1);
    }
}