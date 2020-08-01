import { List } from './index';

const MAX_SIZE = 10;

describe('List', () => {
  it('should create empty list', () => {
    const list = new List<any>([], MAX_SIZE);

    expect(list.get(0)).toEqual(undefined);
  });

  it('should push and get an item', () => {
    const list = new List<number>([], MAX_SIZE);
    list.push(1);

    expect(list.get(0)).toEqual(1);
  });

  it('should should get all initial items', () => {
    const list = new List<number>([1, 2, 3], MAX_SIZE);

    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(3);
  });

  it('should push over initial items', () => {
    const list = new List<number>([1], MAX_SIZE);
    list.push(2).push(3);

    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(2);
    expect(list.get(2)).toEqual(3);
  });

  it('should get items until empty', () => {
    const list = new List<number>([1, 2, 3], MAX_SIZE);
    let i = 0;

    while (i < list.size()) {
      expect(list.get(i)).toBeDefined();
      i++;
    }
  });

  it('should throw error when attempting to push when full', () => {
    const list = new List<number>([1], 1);

    expect(() => list.push(2)).toThrow('List reached max size of 1');
  });
});
