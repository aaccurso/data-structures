export class Stack<T> {
  private list: Array<T>;
  readonly maxSize: number;

  constructor(list: Array<T>, maxSize: number) {
    this.list = list;
    this.maxSize = maxSize;
  }

  add(item: T): this {
    if (this.isFull()) {
      throw new Error(`Stack reached max size of ${this.maxSize}`);
    }
    this.list.push(item);

    return this;
  }

  pop(): T | undefined {
    return this.list.pop();
  }

  size(): number {
    return this.list.length;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  isFull(): boolean {
    return this.size() === this.maxSize;
  }
}
