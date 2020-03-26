import Component from './interfaces/Component';
import Visitor from './interfaces/Visitor';
import ConcreteComponentA from "./classes/ConcreteComponentA";
import ConcreteComponentB from "./classes/ConcreteComponentB";
import ConcreteVisitor1 from "./classes/ConcreteVisitor1";
import ConcreteVisitor2 from "./classes/ConcreteVisitor2";

function start() {
    const components = [
        new ConcreteComponentA(),
        new ConcreteComponentB()
    ]
    
    function clientCode(components: Component[], visitor: Visitor) {
        for(const component of components) {
            component.accept(visitor);
        }
    }
    
    console.log('The client code works with all visitors via the base Visitor interface:');
    const visitor1 = new ConcreteVisitor1();
    clientCode(components, visitor1);
    console.log('');
    
    console.log('It allows the same client code to work with different types of visitors:');
    const visitor2 = new ConcreteVisitor2();
    clientCode(components, visitor2);
}

start();

