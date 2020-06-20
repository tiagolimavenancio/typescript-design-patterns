import WordsCollection from "./classes/WordsCollection";

function start() {
  const collection = new WordsCollection();
  collection.addItem("First");
  collection.addItem("Second");
  collection.addItem("Third");

  const iterator = collection.getIterator();

  console.log("Straight Travessal");
  while (iterator.valid()) {
    console.log(iterator.next());
  }

  console.log("");
  console.log("Reverse Travessal");
  const reverseIterator = collection.getReverseIterator();
  while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
  }
}

start();
