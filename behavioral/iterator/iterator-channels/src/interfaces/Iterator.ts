export default interface Iterator<T> {
  first(): void;

  next(): void;

  back(): void;

  isDone(): boolean;

  currentItem(): T;
}
