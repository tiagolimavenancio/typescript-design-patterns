import TextoMemento from "./TextoMemento";

export default class TextoCareTaker {
  private estados: TextoMemento[] = [];

  constructor() {
    this.estados = new Array();
  }

  public adicionarMemento(memento: TextoMemento) {
    this.estados.push(memento);
  }

  public getUltimoEstadoSalvo(): TextoMemento {
    if (!this.estados.length) {
      return;
    }

    const estadoSalvo: TextoMemento = this.estados.pop();
    return estadoSalvo;
  }
}
