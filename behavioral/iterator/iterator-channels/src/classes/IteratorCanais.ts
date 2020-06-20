import Iterator from "../interfaces/Iterator";
import Canal from "../models/Canal";

export default class IteratorCanais implements Iterator<Canal> {
  private collection: Canal[] = [];
  private count: number = 0;

  constructor(collection: Canal[]) {
    this.collection = collection;
  }

  public first() {
    this.count = 0;
  }

  public next() {
    this.count++;
  }

  public back() {
    this.count--;
  }

  public isDone(): boolean {
    return this.count === this.collection.length;
  }

  public currentItem(): Canal {
    if (this.isDone()) {
      this.count = this.collection.length - 1;
    } else if (this.count < 0) {
      this.count = 0;
    }
    return this.collection[this.count];
  }

  public getNomeCanal(): string {
    return this.currentItem().getNome();
  }
}
