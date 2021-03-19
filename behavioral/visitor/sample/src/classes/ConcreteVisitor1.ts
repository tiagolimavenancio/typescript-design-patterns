import Visitor from '../interfaces/Visitor';
import ConcreteComponentA from "./ConcreteComponentA ";
import ConcreteComponentB from "./ConcreteComponentB";

export default class ConcreteVisitor1 implements Visitor {
    public visitConcreteComponentA(element: ConcreteComponentA) {
        console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
    }

    public visitConcreteComponentB(element: ConcreteComponentB) {
        console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
    }
}