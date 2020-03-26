import ConcreteComponentA from '../classes/ConcreteComponentA';
import ConcreteComponentB from '../classes/ConcreteComponentB';

export default interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}