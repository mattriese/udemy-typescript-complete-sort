import { Sorter } from './bubbleSort';

const sorted = new Sorter([10, 3, -5, 0]);
sorted.bubbleSort();
console.log(sorted.collection);
