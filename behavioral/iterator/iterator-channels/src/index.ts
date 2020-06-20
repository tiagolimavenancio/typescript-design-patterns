import CanaisEsportes from "./classes/CanaisEsportes";

function start() {
  const meusCanais = new CanaisEsportes();
  console.log("Iterando com for:");
  for (let it = meusCanais.createIterator(); !it.isDone(); it.next()) {
    console.log(it.getNomeCanal());
  }

  console.log("Iterando manualmente:");
  const it = meusCanais.createIterator();
  console.log(it.getNomeCanal());
  it.next();
  console.log(it.getNomeCanal());

  console.log("Iterando fora dos limites:");
  it.next();
  console.log(it.getNomeCanal());

  it.first();
  it.back();
  console.log(it.getNomeCanal());
}

start();
