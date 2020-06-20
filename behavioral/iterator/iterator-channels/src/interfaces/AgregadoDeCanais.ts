import IteradorCanais from "../classes/IteratorCanais";
import Canal from "../models/Canal";

export default abstract class AgregadoDeCanais {
  collection: Canal[] = [];

  constructor() {
    this.collection = [];
  }

  public count(): number {
    return this.collection.length;
  }

  public createIterator(): IteradorCanais {
    return new IteradorCanais(this.collection);
  }
}
