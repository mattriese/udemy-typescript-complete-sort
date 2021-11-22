import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  length = this.data.length;

  compare(leftIdx: number, rightIdx: number): boolean {
    return this.data[leftIdx].toUpperCase() > this.data[rightIdx].toUpperCase();
  }

  swap(leftIdx: number, rightIdx: number): void {
    let characters = this.data.split('');
    const temp = characters[leftIdx];
    characters[leftIdx] = characters[rightIdx];
    characters[rightIdx] = temp;
    this.data = characters.join('');
  }
}
