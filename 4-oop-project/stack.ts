{
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  // Stack Class
  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }

    push(value: string): void {
      if (this.size === this.capacity) {
        throw new Error("Stack is already full!");
      }
      const newNode: StackNode = { value, next: this.head };
      this.head = newNode;
      this._size++;
    }

    pop(): string {
      if (this.head == null) {
        throw new Error("Stack is empty!");
      }
      const nodeToPop = this.head;
      this.head = nodeToPop.next;
      this._size--;
      return nodeToPop.value;
    }
  }
}
