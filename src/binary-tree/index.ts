export type Visitor<D> = (data: D) => void;
export type DataKey = number;
export interface Data {
  key: DataKey;
}

export class BinaryTree<D extends Data> {
  readonly data: D;

  leftNode: BinaryTree<D> | null = null;
  rightNode: BinaryTree<D> | null = null;

  constructor(data: D) {
    this.data = data;
  }

  getData(): D {
    return this.data;
  }

  setLeftNode(leftNode: BinaryTree<D>): this {
    this.leftNode = leftNode;

    return this;
  }

  getLeftNode(): BinaryTree<D> | null {
    return this.leftNode;
  }

  setRightNode(rightNode: BinaryTree<D>): this {
    this.rightNode = rightNode;

    return this;
  }

  getRightNode(): BinaryTree<D> | null {
    return this.rightNode;
  }

  traverseInorder(visitor: Visitor<D>): void {
    if (this.leftNode) {
      this.leftNode.traverseInorder(visitor);
    }
    visitor(this.data);
    if (this.rightNode) {
      this.rightNode.traverseInorder(visitor);
    }
  }
}
