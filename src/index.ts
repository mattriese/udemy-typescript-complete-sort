import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// let col = new CharactersCollection('Matthew');
// const sorted = new Sorter(col);
// sorted.bubbleSort();
// console.log('LOG===', sorted.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
console.log(linkedList.print());
const sorter = new Sorter(linkedList);
sorter.bubbleSort();
console.log(linkedList.print());
