import Mediator from "../interface/Mediator";
import Colleague from "../interface/Colleague";
import AndroidColleague from "./AndroidColleague";
import SymbianColleague from "./SymbianColleague";
import IOSColleague from "./IOSColleague";

export default class MensagemMediator implements Mediator {
  protected contatos: Colleague[] = [];

  constructor() {
    this.contatos = new Array();
  }

  public adicionarColleague(colleague: Colleague) {
    this.contatos.push(colleague);
  }

  public enviar(mensagem: string, colleague: Colleague): void {
    for (let contato of this.contatos) {
      if (contato !== colleague) {
        this.definirProtocolo(contato);
        contato.receberMensagem(mensagem);
      }
    }
  }

  public definirProtocolo(contato: Colleague) {
    if (contato instanceof IOSColleague) {
      console.log("Protocolo iOS");
    } else if (contato instanceof AndroidColleague) {
      console.log("Protocolo Android");
    } else if (contato instanceof SymbianColleague) {
      console.log("Protocolo Symbiam");
    }
  }
}
