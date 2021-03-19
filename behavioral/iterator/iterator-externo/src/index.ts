import CanaisEsportes from "./classes/CanaisEsportes";
import CanaisFilmes from "./classes/CanaisFilmes";

function start() {
  const canaisDeEsportes = new CanaisEsportes();
  console.log("Canais de Esportes");

  for (let it = canaisDeEsportes.criarIterator(); !it.isDone(); it.next()) {
    console.log(it.currentItem().getNome());
  }

  const canaisDeFilmes = new CanaisFilmes();
  console.log("Canais de Filmes");

  for (let it = canaisDeFilmes.criarIterator(); !it.isDone(); it.next()) {
    console.log(it.currentItem().getNome());
  }
}

start();
