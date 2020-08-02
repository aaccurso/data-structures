import {
  BinarySearchTree,
  Comparator,
  ComparisonResult,
  Visitor,
} from './index';

describe('Binary Search Tree', () => {
  const comparator: Comparator<number> = (
    leftValue: number,
    rightValue: number
  ) => {
    if (leftValue > rightValue) return ComparisonResult.GREATER_THAN;
    if (leftValue === rightValue) return ComparisonResult.EQUAL;
    return ComparisonResult.LESSER_THAN;
  };

  it('should add root node', () => {
    const tree = new BinarySearchTree<number>(comparator);

    tree.add(1);

    expect(tree.rootNode.getValue()).toEqual(1);
  });

  it('should add values and print in order', () => {
    const tree = new BinarySearchTree<number>(comparator);

    tree
      .add(3)
      .add(1)
      .add(5)
      .add(2)
      .add(4);

    let result: Array<number> = [];
    const visitor: Visitor<number> = value => result.push(value);

    tree.traverseInorder(visitor);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
