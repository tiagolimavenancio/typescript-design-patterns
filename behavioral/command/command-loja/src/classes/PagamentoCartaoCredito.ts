import PagamentoCommand from "../interfaces/PagamentoCommand";
import Compra from "../models/Compra";

export default class PagamentoCartaoCredito implements PagamentoCommand {
  public processarCompra(compra: Compra): void {
    console.log(`Compra emitida: ${compra.getInfoNota()}!`);
  }
}
