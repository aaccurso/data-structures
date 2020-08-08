import { BinaryTree, Visitor, Data, DataKey } from '../binary-tree';

export { Visitor, Data };

export enum ComparisonResult {
  GREATER_THAN = 1,
  EQUAL = 0,
  LESSER_THAN = -1,
}

export class BinarySearchTree<D extends Data> {
  rootNode: BinaryTree<D> | null = null;

  comparator(leftKey: DataKey, rightKey: DataKey) {
    if (leftKey > rightKey) return ComparisonResult.GREATER_THAN;
    if (leftKey === rightKey) return ComparisonResult.EQUAL;
    return ComparisonResult.LESSER_THAN;
  }

  add(data: D): this {
    if (!this.rootNode) {
      this.rootNode = new BinaryTree<D>(data);

      return this;
    }

    let inserted = false;
    let currentNode = this.rootNode;

    do {
      const comparison = this.comparator(currentNode.getData().key, data.key);

      // Node key is greater so add to left node
      if (comparison === ComparisonResult.GREATER_THAN) {
        if (!currentNode.getLeftNode()) {
          currentNode.setLeftNode(new BinaryTree<D>(data));
          inserted = true;
        } else {
          currentNode = currentNode.getLeftNode();
        }
      }
      // Node key is lesser so add to left node
      if (comparison === ComparisonResult.LESSER_THAN) {
        if (!currentNode.getRightNode()) {
          currentNode.setRightNode(new BinaryTree<D>(data));
          inserted = true;
        } else {
          currentNode = currentNode.getRightNode();
        }
      }
      // Node key is equal so do nothing
      if (comparison === ComparisonResult.EQUAL) {
        inserted = true;
      }
    } while (!inserted);

    return this;
  }

  find(key: number): D | null {
    if (!this.rootNode) {
      return null;
    }

    let found = false;
    let foundNodeData: D = null;
    let currentNode = this.rootNode;

    do {
      const comparison = this.comparator(currentNode.getData().key, key);

      // Node key is greater so search in left node
      if (comparison === ComparisonResult.GREATER_THAN) {
        if (!currentNode.getLeftNode()) {
          found = true;
        } else {
          currentNode = currentNode.getLeftNode();
        }
      }
      // Node key is lesser so search in left node
      if (comparison === ComparisonResult.LESSER_THAN) {
        if (!currentNode.getRightNode()) {
          found = true;
        } else {
          currentNode = currentNode.getRightNode();
        }
      }
      // Node key was found
      if (comparison === ComparisonResult.EQUAL) {
        found = true;
        foundNodeData = currentNode.getData();
      }
    } while (!found);

    return foundNodeData;
  }

  traverseInorder(visitor: Visitor<Data>): void {
    this.rootNode.traverseInorder(visitor);
  }
}
