import Loja from "./models/Loja";
import PagamentoBoleto from "./classes/PagamentoBoleto";
import PagamentoCartaoCredito from "./classes/PagamentoCartaoCredito";
import PagamentoCartaoDebito from "./classes/PagamentoCartaoDebito";

function start() {
  const lojasAfricanas = new Loja("Africanas");

  lojasAfricanas.executarCompra(999.0, new PagamentoCartaoCredito());
  lojasAfricanas.executarCompra(49.0, new PagamentoBoleto());
  lojasAfricanas.executarCompra(99.0, new PagamentoCartaoDebito());

  const exorbitante = new Loja("Exorbitante");
  exorbitante.executarCompra(19.0, new PagamentoCartaoCredito());
}

start();
