import { BinarySearchTree, Visitor, Data } from './index';

describe('Binary Search Tree', () => {
  it('should add root node', () => {
    const tree = new BinarySearchTree<Data>();

    tree.add({ key: 1 });

    expect(tree.rootNode.getData()).toEqual({ key: 1 });
  });

  it('should ignore node with duplicate key', () => {
    const tree = new BinarySearchTree<Data>();

    tree.add({ key: 1 }).add({ key: 1 });

    expect(tree.rootNode.getData()).toEqual({ key: 1 });
    expect(tree.rootNode.getLeftNode()).toEqual(null);
    expect(tree.rootNode.getRightNode()).toEqual(null);
  });

  it('should add values and print in order', () => {
    const tree = new BinarySearchTree<Data>();

    tree
      .add({ key: 3 })
      .add({ key: 1 })
      .add({ key: 5 })
      .add({ key: 2 })
      .add({ key: 4 });

    let result: Array<number> = [];
    const visitor: Visitor<Data> = ({ key }) => result.push(key);

    tree.traverseInorder(visitor);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should find node by key', () => {
    interface TestData extends Data {
      value: string;
    }
    const tree = new BinarySearchTree<TestData>();
    tree
      .add({ key: 3, value: 'three' })
      .add({ key: 1, value: 'one' })
      .add({ key: 5, value: 'five' })
      .add({ key: 2, value: 'two' })
      .add({ key: 4, value: 'four' });

    let data = tree.find(2);
    expect(data.value).toEqual('two');
    data = tree.find(-1);
    expect(data).toEqual(null);
  });
});
