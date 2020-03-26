import AbstractClass from "./abstract/AbstractClass";
import ConcreteClass1 from './classes/ConcreteClass1';
import ConcreteClass2 from './classes/ConcreteClass2';

function start(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

console.log('Same client code can work with different subclasses:');
start(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
start(new ConcreteClass2());