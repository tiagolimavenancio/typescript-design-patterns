import Mediator from "./Mediator";

export default abstract class Colleague {
  protected mediator: Mediator;

  constructor(m: Mediator) {
    this.mediator = m;
  }

  public enviarMensagem(mensagem: string): void {
    this.mediator.enviar(mensagem, this);
  }

  public abstract receberMensagem(mensagem: string): void;
}
