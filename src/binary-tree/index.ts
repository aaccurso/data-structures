type Visitor<T> = (value: T) => void;

export class BinaryTree<T> {
  readonly value: T;
  leftNode: BinaryTree<T> | null = null;
  rightNode: BinaryTree<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setLeftNode(leftNode: BinaryTree<T>): this {
    this.leftNode = leftNode;

    return this;
  }

  getLeftNode(): BinaryTree<T> | null {
    return this.leftNode;
  }

  setRightNode(rightNode: BinaryTree<T>): this {
    this.rightNode = rightNode;

    return this;
  }

  getRightNode(): BinaryTree<T> | null {
    return this.rightNode;
  }

  traverseInorder(visitor: Visitor<T>): void {
    if (this.leftNode) {
      this.leftNode.traverseInorder(visitor);
    }
    visitor(this.value);
    if (this.rightNode) {
      this.rightNode.traverseInorder(visitor);
    }
  }
}
