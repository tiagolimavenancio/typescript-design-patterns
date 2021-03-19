import Context from "./classes/Context";
import ConcreteStateA from "./classes/ConcreteStateA";

function start() {
    const context = new Context(new ConcreteStateA());
    context.request1();
    context.request2();
}

start();