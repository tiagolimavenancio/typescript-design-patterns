import IteradorMatrizDeCanais from "./IteradorMatrizDeCanais";
import AgregadoDeCanais from "../interfaces/AgregadoDeCanais";
import IteradorInterface from "../interfaces/IteradorInterface";
import Canal from "../models/Canal";

export default class CanaisFilmes implements AgregadoDeCanais {
  private canais: Canal[] = [];

  constructor() {
    this.canais.push(new Canal("Cinemax"));
    this.canais.push(new Canal("HBO"));
    this.canais.push(new Canal("Fox"));
    this.canais.push(new Canal("Sony"));
    this.canais.push(new Canal("HTC"));
  }

  public criarIterator(): IteradorInterface {
    return new IteradorMatrizDeCanais(this.canais);
  }
}
