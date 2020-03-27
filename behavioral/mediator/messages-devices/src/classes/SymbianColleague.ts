import Colleague from "../interface/Colleague";
import Mediator from "../interface/Mediator";

export default class SymbianColleague extends Colleague {
  constructor(m: Mediator) {
    super(m);
  }

  public receberMensagem(mensagem: string): void {
    console.log(`Symbian recebeu: ${mensagem}`);
  }
}
