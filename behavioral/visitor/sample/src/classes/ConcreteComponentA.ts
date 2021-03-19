import Component from '../interfaces/Component';
import Visitor from '../interfaces/Visitor';

export default class ConcreteComponentA implements Component {
    public accept(visitor: Visitor) {
        visitor.visitConcreteComponentA(this);
    }

    public exclusiveMethodOfConcreteComponentA(): string {
        return 'A';
    }
}