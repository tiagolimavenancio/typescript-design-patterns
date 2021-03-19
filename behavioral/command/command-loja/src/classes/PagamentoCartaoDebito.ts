import PagamentoCommand from "../interfaces/PagamentoCommand";
import Compra from "../models/Compra";

export default class PagamentoCartaoDebito implements PagamentoCommand {
  public processarCompra(compra: Compra): void {
    console.log(`Compra debitada: ${compra.getInfoNota()}!`);
  }
}
