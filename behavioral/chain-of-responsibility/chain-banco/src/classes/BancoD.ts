import { IDBancos } from "../enum/IDBancos";
import BancoChain from "../interfaces/BancoChain";

export default class BancoD extends BancoChain {
  constructor() {
    super(IDBancos.bancoD);
  }

  efetuaPagamento(): void {
    console.log("Pagamento efetuado no banco D");
  }
}
