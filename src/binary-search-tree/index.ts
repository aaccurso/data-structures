import { BinaryTree, Visitor } from '../binary-tree';

export { Visitor };

export enum ComparisonResult {
  GREATER_THAN = 1,
  EQUAL = 0,
  LESSER_THAN = -1,
}

export type Comparator<T> = (leftValue: T, rightValue: T) => ComparisonResult;

export class BinarySearchTree<T> {
  rootNode: BinaryTree<T> | null = null;
  comparator: Comparator<T>;

  constructor(comparator: Comparator<T>) {
    this.comparator = comparator;
  }

  add(value: T): this {
    if (!this.rootNode) {
      this.rootNode = new BinaryTree<T>(value);

      return this;
    }

    let inserted = false;
    let currentNode = this.rootNode;
    do {
      const comparison = this.comparator(currentNode.getValue(), value);

      // Node value is greater so add to left node
      if (comparison === ComparisonResult.GREATER_THAN) {
        if (!currentNode.getLeftNode()) {
          currentNode.setLeftNode(new BinaryTree<T>(value));
          inserted = true;
        } else {
          currentNode = currentNode.getLeftNode();
        }
      }
      // Node value is lesser so add to left node
      if (comparison === ComparisonResult.LESSER_THAN) {
        if (!currentNode.getRightNode()) {
          currentNode.setRightNode(new BinaryTree<T>(value));
          inserted = true;
        } else {
          currentNode = currentNode.getRightNode();
        }
      }
    } while (!inserted);

    return this;
  }

  traverseInorder(visitor: Visitor<T>): void {
    this.rootNode.traverseInorder(visitor);
  }
}
