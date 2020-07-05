import { IDBancos } from "../enum/IDBancos";

export default abstract class BancoChain {
  private next: BancoChain;
  private identificadorDoBanco: IDBancos;

  constructor(id: IDBancos) {
    this.next = null;
    this.identificadorDoBanco = id;
  }

  public setNext(forma: BancoChain): void {
    if (this.next === null) {
      this.next = forma;
    } else {
      this.next.setNext(forma);
    }
  }

  public efetuarPagamento(id: IDBancos): void {
    if (this.podeEfetuarPagamento(id)) {
      this.efetuaPagamento();
    } else {
      if (this.next === null) {
        throw new Error();
      }
      this.next.efetuarPagamento(id);
    }
  }

  public podeEfetuarPagamento(id: IDBancos): boolean {
    if (this.identificadorDoBanco === id) {
      return true;
    }
    return false;
  }

  abstract efetuaPagamento(): void;
}
