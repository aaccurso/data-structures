import { List } from '../list';

export class Stack<T> extends List<T> {
  add(item: T): this {
    return super.push(item);
  }

  pop(): T | undefined {
    return this.list.pop();
  }
}
