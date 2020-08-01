import { List } from '../list';

export class Queue<T> extends List<T> {
  enqueue(item: T): this {
    return super.push(item);
  }

  dequeue(): T | undefined {
    return this.list.shift();
  }
}
