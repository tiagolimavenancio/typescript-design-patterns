import IteradorInterface from "../interfaces/IteradorInterface";
import Canal from "../models/Canal";

export default class IteradorListaDeCanais implements IteradorInterface {
  private lista: Canal[] = [];
  private count: number = 0;

  constructor(lista: Canal[]) {
    this.lista = lista;
    this.count = 0;
  }

  public first(): void {
    this.count = 0;
  }

  public next(): void {
    this.count++;
  }

  public back(): void {
    this.count--;
  }

  public isDone(): boolean {
    return this.count == this.lista.length;
  }

  public currentItem(): Canal {
    if (this.isDone()) {
      this.count = this.lista.length - 1;
    } else if (this.count < 0) {
      this.count = 0;
    }
    return this.lista[this.count];
  }
}
