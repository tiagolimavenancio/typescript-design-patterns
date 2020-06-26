import PagamentoCommand from "../interfaces/PagamentoCommand";
import Compra from "./Compra";

export default class Loja {
  private nomeDaLoja: string;

  constructor(nome: string) {
    this.nomeDaLoja = nome;
  }

  public executarCompra(
    valor: number,
    formaDePagamento: PagamentoCommand
  ): void {
    const compra = new Compra(this.nomeDaLoja);
    compra.setValor(valor);
    formaDePagamento.processarCompra(compra);
  }
}
