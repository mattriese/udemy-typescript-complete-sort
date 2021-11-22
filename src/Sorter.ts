/**
 * Bubble sort algorithm
 */
// interface SortClass {
//   collection: number[];
//   bubbleSort(): void;
// }

export interface Collection {
  // data: <--- the whole point was that the data type is hidden in the individual classes
  // and Sorter doesn't have to know!!
  length: number;
  compare(leftIdx: number, rightIdx: number): boolean;
  swap(leftIdx: number, rightIdx: number): void;
}

export class Sorter {
  constructor(public collection: Collection) {}

  bubbleSort(): void {
    const { length } = this.collection;
    const collection = this.collection;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (collection.compare(j, j + 1)) {
          collection.swap(j, j + 1);
        }
      }
    }
  }
}
