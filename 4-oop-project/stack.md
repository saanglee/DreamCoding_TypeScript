> 단일 연결 리스트를 이용해 스택을 구현

## Interface 작성

- size 멤버변수
- push, pop 메서드
  - push string타입 인자를 받아 아무것도 리턴하지 않음
  - pop string타입의 값을 리턴

```ts
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}
```

## type StackNode

stack에 들어갈 노드의 값 = `value`
value가 가리키는 다음 노드 = `next`

```ts
type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};
```

- `readonly`
  - 불변성을 유지: 한번 만들어지면 내용이 변경되지 않도록 한다.
- `next?: StackNode;`
  : 다른 노드를 가리키거나, 마지막 노드의 경우 아무것도 가리키지 않을 수 있다.

## 스택 클래스 구현

> 전체 코드는 포스팅 맨 밑에 있습니다.

: Interface 규격에 맞게 stack을 구현한다.

> (Impl : Implementation)

### 스택 사이즈 지정 & constructor

`private _size: number = 0;`
스택 사이즈 0부터 시작

> (참고) readonly \_size (X)
> : class안에서도 `readonly`를 붙이면 \_size를 변경할 수 없다.

constructor로 스택의 크기를 지정한다.

```ts
class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  constructor(private capacity: number) {}
```

- getter를 이용해 `size` 를 정의한다.
- setter가 없기 때문에 외부에서는 `size` 정보를 읽기만 가능하다. 내부에서는 변경 가능하다.

```ts
  get size() {
  return this._size;
}
```

## push()

- 스택의 사이즈와 스택의 용량(constructor로 입력한 capacity)이 동일하면 "Stack is already full!" 에러 메세지를 띄운다.
- 노드 생성, head가 새로 들어온 Node를 가리키도록 변경한다.
- 새로 들어온 Node는 head가 기존에 가리키던 노드를 가리키도록 한다.

```ts
  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is already full!");
    }
    const newNode: StackNode = { value, next: this.head };
    this.head = newNode;
    this._size++;
  }
```

## pop()

- 스택이 비어있는 지 아닌 지 먼저 확인한다.
- 헤드가 가리키던 노드를 제거한다.
- 헤드가 가리키던 node의 value를 리턴한다.
- head는 pop된 노드가 가리키던 노드를 가리키도록 한다.

```ts
  pop(): string {
  if (this.head == null) {
    throw new Error("Stack is empty!");
  }
  const nodeToPop = this.head;
  this.head = nodeToPop.next;
  this._size--;
  return nodeToPop.value;
}
```

> ⚠️ 왜 null? - null또는 undefined가 들어올 경우 대비해서
> null == undefined
> null !== undefined

---

```ts
interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

// Stack interface를 구현하는 StackImpl 클래스

class StackImpl implements Stack {
  private _size: number = 0; // 스택 사이즈 0부터 시작
  private head?: StackNode;

  // 스택 사이즈 지정
  constructor(private capacity: number) {}

  get size() {
    return this._size;
  }

  push(value: string): void {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    // 새로 들어온 node는 head가 기존에 가리키던 노드를 가리키도록 함
    this.head = node;
    // head는 새로 들어온 node를 가리키도록 변경
    this._size++;
  }

  pop(): string {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}
```
