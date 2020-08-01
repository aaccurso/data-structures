export class Queue<T> {
  private list: Array<T>;
  readonly maxSize: number;

  constructor(list: Array<T>, maxSize: number) {
    this.list = list;
    this.maxSize = maxSize;
  }

  enqueue(item: T): this {
    if (this.isFull()) {
      throw new Error(`Queue reached max size of ${this.maxSize}`);
    }
    this.list.push(item);

    return this;
  }

  dequeue(): T | undefined {
    return this.list.shift();
  }

  size(): number {
    return this.list.length;
  }

  private isFull(): boolean {
    return this.size() === this.maxSize;
  }
}
