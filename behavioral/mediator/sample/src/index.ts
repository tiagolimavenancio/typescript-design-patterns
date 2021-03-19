import Component1 from "./classes/Component1";
import Component2 from "./classes/Component2";
import ConcreteMediator from "./classes/ConcreteMediator";

function start() {
  const c1 = new Component1();
  const c2 = new Component2();
  const mediator = new ConcreteMediator(c1, c2);

  console.log("Client triggers operation A.");
  c1.doA();

  console.log("");
  console.log("Client triggers operation D.");
  c2.doD();
}

start();
