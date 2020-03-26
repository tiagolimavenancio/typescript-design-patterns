import TextoCareTaker from "./TextoCareTaker";
import TextoMemento from "./TextoMemento";

export default class Texto {
  private texto: string;
  private caretaker: TextoCareTaker;

  constructor() {
    this.caretaker = new TextoCareTaker();
    this.texto = "";
  }

  public escreverTexto(novoText: string): void {
    this.caretaker.adicionarMemento(new TextoMemento(this.texto));
    this.texto += novoText;
  }

  public desfazerEscrita() {
    const estadoSalvo = this.caretaker.getUltimoEstadoSalvo();
    this.texto = estadoSalvo?.getTextoSalvo();
  }

  public mostrarTexto() {
    console.log(this.texto);
  }
}
