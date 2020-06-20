import AgregadoDeCanais from "../interfaces/AgregadoDeCanais";
import IteratorCanais from "./IteratorCanais";
import Canal from "../models/Canal";

export default class CanaisEsportes extends AgregadoDeCanais {
  constructor() {
    super();
    this.collection.push(new Canal("Esporte ao vivo"));
    this.collection.push(new Canal("Basquete 2011"));
    this.collection.push(new Canal("Campeonato Italiano"));
    this.collection.push(new Canal("Campeonato Espanhol"));
    this.collection.push(new Canal("Campeonato Brasileiro"));
  }
}
