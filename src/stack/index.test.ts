import { Stack } from './index';

const MAX_SIZE = 10;

describe('Stack', () => {
  it('should create empty stack', () => {
    const stack = new Stack<any>([], MAX_SIZE);

    expect(stack.pop()).toEqual(undefined);
  });

  it('should add and pop an item', () => {
    const stack = new Stack<number>([], MAX_SIZE);
    stack.add(1);

    expect(stack.pop()).toEqual(1);
  });

  it('should should pop all initial items', () => {
    const stack = new Stack<number>([1, 2, 3], MAX_SIZE);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  it('should enstack over initial items', () => {
    const stack = new Stack<number>([1], MAX_SIZE);
    stack.add(2).add(3);

    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });

  it('should destack until empty', () => {
    const stack = new Stack<number>([1, 2, 3], MAX_SIZE);

    while (!stack.isEmpty()) {
      expect(stack.pop()).toBeDefined();
    }
  });

  it('should throw error when attempting to stack when full', () => {
    const stack = new Stack<number>([1], 1);

    expect(() => stack.add(2)).toThrow('Stack reached max size of 1');
  });
});
