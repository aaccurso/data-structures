export class List<T> {
  readonly list: Array<T>;
  readonly maxSize: number;

  constructor(list: Array<T>, maxSize: number) {
    this.list = list;
    this.maxSize = maxSize;
  }

  push(item: T): this {
    if (this.isFull()) {
      throw new Error(`
        ${this.constructor.name} reached max size of ${this.maxSize}
      `);
    }
    this.list.push(item);

    return this;
  }

  get(index: number): T | undefined {
    return this.list[index];
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
