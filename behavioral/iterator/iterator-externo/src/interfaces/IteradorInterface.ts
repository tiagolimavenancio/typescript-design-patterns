import Canal from "../models/Canal";

export default interface IteradorInterface {
  first(): void;
  next(): void;
  back(): void;
  isDone(): boolean;
  currentItem(): Canal;
}
