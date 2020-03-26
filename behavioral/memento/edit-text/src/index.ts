import Texto from "./classes/Texto";

function start() {
  const texto = new Texto();

  texto.escreverTexto("Primeira linha do texto\n");
  texto.escreverTexto("Segunda linha do texto\n");
  texto.escreverTexto("Terceira linha do texto\n");

  texto.mostrarTexto();
  texto.desfazerEscrita();

  console.log("");
  texto.mostrarTexto();
  texto.desfazerEscrita();

  console.log("");
  texto.mostrarTexto();
  texto.desfazerEscrita();

  console.log("");
  texto.mostrarTexto();
  texto.desfazerEscrita();

  console.log("");
  texto.mostrarTexto();
  texto.desfazerEscrita();

  console.log("");
  texto.mostrarTexto();
}

start();
