import ConcreteImplementationA from "./classes/ConcreteImplementationA";
import ConcreteImplementationB from "./classes/ConcreteImplementationB";
import Abstraction from "./classes/Abstraction";
import ExtendedAbstraction from "./classes/ExtendedAbstraction";

function start() {
  let implementation = new ConcreteImplementationA();
  let abstraction = new Abstraction(implementation);
  console.log(abstraction.operation());

  console.log("");

  implementation = new ConcreteImplementationB();
  abstraction = new ExtendedAbstraction(implementation);
  console.log(abstraction.operation());
}

start();
