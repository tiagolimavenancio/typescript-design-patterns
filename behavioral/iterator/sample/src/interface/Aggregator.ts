import Iterator from "./Iterator";

export default interface Aggregator {
  // Retrieve an external iterator.
  getIterator(): Iterator<string>;
}
