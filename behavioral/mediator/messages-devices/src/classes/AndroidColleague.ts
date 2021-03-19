import Colleague from "../interface/Colleague";
import Mediator from "../interface/Mediator";

export default class AndroidColleague extends Colleague {
  constructor(m: Mediator) {
    super(m);
  }

  public receberMensagem(mensagem: string): void {
    console.log(`Android recebeu: ${mensagem}`);
  }
}
