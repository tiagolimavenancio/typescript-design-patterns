import IteradorListaDeCanais from "./IteradorListaDeCanais";
import AgregadoDeCanais from "../interfaces/AgregadoDeCanais";
import IteradorInterface from "../interfaces/IteradorInterface";
import Canal from "../models/Canal";

export default class CanaisEsportes implements AgregadoDeCanais {
  private canais: Canal[] = [];

  constructor() {
    this.canais.push(new Canal("Esporte ao vivo"));
    this.canais.push(new Canal("Basquete 2011"));
    this.canais.push(new Canal("Campeonato Italiano"));
    this.canais.push(new Canal("Campeonato Espanhol"));
    this.canais.push(new Canal("Campeonato Brasileiro"));
  }

  public criarIterator(): IteradorInterface {
    return new IteradorListaDeCanais(this.canais);
  }
}
