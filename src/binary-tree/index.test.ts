import { BinaryTree, Visitor, Data } from './index';

describe('Binary Tree', () => {
  it('should create root node', () => {
    const tree = new BinaryTree<Data>({ key: 1 });

    expect(tree.getData()).toEqual({ key: 1 });
  });

  it('should set left and right nodes', () => {
    const tree = new BinaryTree<Data>({ key: 1 });
    tree.setLeftNode(
      new BinaryTree<Data>({ key: 2 })
    );
    tree.setRightNode(
      new BinaryTree<Data>({ key: 3 })
    );

    expect(tree.getData()).toEqual({ key: 1 });
    expect(tree.getLeftNode().getData()).toEqual({ key: 2 });
    expect(tree.getRightNode().getData()).toEqual({ key: 3 });
  });

  it('should traverse in order', () => {
    const tree = new BinaryTree<Data>({ key: 1 });
    tree.setLeftNode(
      new BinaryTree<Data>({ key: 2 })
    );
    tree.setRightNode(
      new BinaryTree<Data>({ key: 3 })
    );

    let result: Array<number> = [];
    const visitor: Visitor<Data> = ({ key }) => result.push(key);

    tree.traverseInorder(visitor);

    expect(result).toEqual([2, 1, 3]);
  });
});
