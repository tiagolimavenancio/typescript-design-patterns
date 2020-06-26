import Invoker from "./classes/Invoker";
import SimpleCommand from "./classes/SimpleCommand";
import ComplexCommand from "./classes/ComplexCommand";
import Receiver from "./classes/Receiver";

function start() {
  const invoker = new Invoker();
  invoker.setOnStart(new SimpleCommand("Say Hi!"));

  const receiver = new Receiver();
  invoker.setOnFinish(
    new ComplexCommand(receiver, "Send Email", "Save report")
  );
  invoker.doSomethingImportant();
}

start();
