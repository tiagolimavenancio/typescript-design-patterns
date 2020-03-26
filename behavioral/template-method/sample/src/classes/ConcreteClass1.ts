import AbstractClass from "../abstract/AbstractClass";

export default class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1 says: Implemented Operation1');
    }

    protected requiredOperations2(): void {
        console.log('ConcreteClass1 says: Implemented Operation2');
    }
}