import { IDBancos } from "../enum/IDBancos";
import BancoChain from "../interfaces/BancoChain";

export default class BancoC extends BancoChain {
  constructor() {
    super(IDBancos.bancoC);
  }

  efetuaPagamento(): void {
    console.log("Pagamento efetuado no banco C");
  }
}
