import { Queue } from './index';

const MAX_SIZE = 10;

describe('Queue', () => {
  it('should create empty queue', () => {
    const queue = new Queue<any>([], MAX_SIZE);

    expect(queue.dequeue()).toEqual(undefined);
  });

  it('should enqueue and dequeue an item', () => {
    const queue = new Queue<number>([], MAX_SIZE);
    queue.enqueue(1);

    expect(queue.dequeue()).toEqual(1);
  });

  it('should should dequeue all initial items', () => {
    const queue = new Queue<number>([1, 2, 3], MAX_SIZE);

    expect(queue.dequeue()).toEqual(1);
    expect(queue.dequeue()).toEqual(2);
    expect(queue.dequeue()).toEqual(3);
  });
});
