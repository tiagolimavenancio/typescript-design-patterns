import BancoChain from "../interfaces/BancoChain";
import { IDBancos } from "../enum/IDBancos";

export default class BancoA extends BancoChain {
  constructor() {
    super(IDBancos.bancoA);
  }

  efetuaPagamento(): void {
    console.log("Pagamento efetuado no banco A");
  }
}
