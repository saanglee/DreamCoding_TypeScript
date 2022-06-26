/*
interface Either {
  left: () => number;
  right: () => number;
}


class SimpleEither implements Either {
  constructor(private leftValue: number, private rightValue: number) {}
  
  left(): number {
    return this.leftValue;
  }
  right(): number {
    return this.rightValue;
  }
}

const either = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5
*/

// 제네릭
// 사용하는 사람이 나중에 타입을 결정한다
interface Either<L, R> {
  // interface를 제네릭으로 구현
  left: () => L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}

  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}

const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5

const best1: Either<number, string> = new SimpleEither(3, "hello");
// const best2: Either<number, boolean> = new SimpleEither(3, "hello");
/* --> type error: Type 'SimpleEither<number, string>' is not assignable to type 'Either<number, boolean>'. The types returned by 'right()' are incompatible between these types. Type 'string' is not assignable to type 'boolean'
 */
const best3 = new SimpleEither({ name: "sang" }, true);
