import PagamentoCommand from "../interfaces/PagamentoCommand";
import Compra from "../models/Compra";

export default class PagamentoBoleto implements PagamentoCommand {
  public processarCompra(compra: Compra): void {
    console.log(`Boleto criado: ${compra.getInfoNota()}!`);
  }
}
