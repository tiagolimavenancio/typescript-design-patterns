import { IDBancos } from "../enum/IDBancos";
import BancoChain from "../interfaces/BancoChain";

export default class BancoB extends BancoChain {
  constructor() {
    super(IDBancos.bancoB);
  }

  efetuaPagamento(): void {
    console.log("Pagamento efetuado no banco B");
  }
}
