/**
 * Bubble sort algorithm
 */
interface SortClass {
  collection: number[];
  bubbleSort(): void;
}

export class Sorter implements SortClass {
  constructor(public collection: number[]) {}

  bubbleSort(): void {
    const { length } = this.collection;
    const collection = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (collection[j] > collection[j + 1]) {
          let temp = collection[j];
          collection[j] = collection[j + 1];
          collection[j + 1] = temp;
        }
      }
    }
  }
}
