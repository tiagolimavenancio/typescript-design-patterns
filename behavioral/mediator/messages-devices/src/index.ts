import MensagemMediator from "./classes/MensagemMediator";
import AndroidColleague from "./classes/AndroidColleague";
import IOSColleague from "./classes/IOSColleague";
import SymbianColleague from "./classes/SymbianColleague";

function start() {
  const mediator = new MensagemMediator();
  const android = new AndroidColleague(mediator);
  const ios = new IOSColleague(mediator);
  const symbian = new SymbianColleague(mediator);

  mediator.adicionarColleague(android);
  mediator.adicionarColleague(ios);
  mediator.adicionarColleague(symbian);

  symbian.enviarMensagem("Oi, eu sou um Symbian!");
  console.log("========");
  android.enviarMensagem("Oi Symbiam! Eu sou um Android");
  console.log("========");
  ios.enviarMensagem("Olá todos, sou um iOS!");
}

start();
