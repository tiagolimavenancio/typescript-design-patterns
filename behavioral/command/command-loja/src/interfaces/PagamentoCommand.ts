import Compra from "../models/Compra";

export default interface PagamentoCommand {
  processarCompra(compra: Compra): void;
}
