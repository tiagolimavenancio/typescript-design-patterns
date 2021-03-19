import Context from './classes/Context';
import ConcreteStrategyA from "./classes/ConcreteStrategyA";
import ConcreteStrategyB from './classes/ConcreteStrategyB';

function start() {
    const context = new Context(new ConcreteStrategyA());
    console.log('Client: Strategy is set to normal sorting.');
    context.doSomeBusinessLogic();

    console.log('');

    console.log('Client: Strategy is set to reverse sorting.');
    context.setStrategy(new ConcreteStrategyB());
    context.doSomeBusinessLogic();
}

start();