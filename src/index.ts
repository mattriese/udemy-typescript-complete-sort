import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

let col = new NumbersCollection([10, 3, -5, 0]);
const sorted = new Sorter(col);
sorted.bubbleSort();
console.log('LOG===', sorted.collection);
