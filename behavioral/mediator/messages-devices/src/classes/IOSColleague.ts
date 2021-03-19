import Colleague from "../interface/Colleague";
import Mediator from "../interface/Mediator";

export default class IOSColleague extends Colleague {
  constructor(m: Mediator) {
    super(m);
  }

  public receberMensagem(mensagem: string): void {
    console.log(`iOS recebeu: ${mensagem}`);
  }
}
