export default class TextoMemento {
  private estadoTexto: string;

  constructor(texto: string) {
    this.estadoTexto = texto;
  }

  public getTextoSalvo(): string {
    return this.estadoTexto;
  }
}
