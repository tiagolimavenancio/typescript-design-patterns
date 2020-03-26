import Component from '../interfaces/Component';
import Visitor from '../interfaces/Visitor';

export default class ConcreteComponentB implements Component {
    public accept(visitor: Visitor) {
        visitor.visitConcreteComponentB(this);
    }

    public specialMethodOfConcreteComponentB(): string {
        return 'B';
    }
}