import { BinaryTree, Visitor } from './index';

describe('Binary Tree', () => {
  it('should create root node', () => {
    const tree = new BinaryTree<number>(1);

    expect(tree.getValue()).toEqual(1);
  });

  it('should set left and right nodes', () => {
    const tree = new BinaryTree<number>(1);
    tree.setLeftNode(new BinaryTree<number>(2));
    tree.setRightNode(new BinaryTree<number>(3));

    expect(tree.getValue()).toEqual(1);
    expect(tree.getLeftNode().getValue()).toEqual(2);
    expect(tree.getRightNode().getValue()).toEqual(3);
  });

  it('should traverse in order', () => {
    const tree = new BinaryTree<number>(1);
    tree.setLeftNode(new BinaryTree<number>(2));
    tree.setRightNode(new BinaryTree<number>(3));

    let result: Array<number> = [];
    const visitor: Visitor<number> = value => result.push(value);

    tree.traverseInorder(visitor);

    expect(result).toEqual([2, 1, 3]);
  });
});
