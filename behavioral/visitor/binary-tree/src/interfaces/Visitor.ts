import Node from '../classes/Node';
export default interface Visitor {
    visit(node: Node): void;
}