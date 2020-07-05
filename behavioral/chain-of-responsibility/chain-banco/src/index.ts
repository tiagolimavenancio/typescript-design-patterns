import BancoChain from "./interfaces/BancoChain";
import BancoA from "./classes/BancoA";
import BancoB from "./classes/BancoB";
import BancoC from "./classes/BancoC";
import BancoD from "./classes/BancoD";
import { IDBancos } from "./enum/IDBancos";

function start() {
  const bancos: BancoChain = new BancoA();
  bancos.setNext(new BancoB());
  bancos.setNext(new BancoC());
  bancos.setNext(new BancoD());

  try {
    bancos.efetuarPagamento(IDBancos.bancoC);
    bancos.efetuarPagamento(IDBancos.bancoD);
    bancos.efetuarPagamento(IDBancos.bancoA);
    bancos.efetuarPagamento(IDBancos.bancoB);
  } catch (error) {
    console.error(error);
  }
}

start();
