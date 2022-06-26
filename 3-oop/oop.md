# Interface

인터페이스는 상호 간에 정의한 약속 혹은 규칙을 의미합니다.

## 예제

```ts
function logAge(obj: { age: number }) {
  console.log(obj.age);
}
let user = { name: "Sang", age: 28 };

logAge(user); // 28
```

interface 적용

```ts
interface userAge {
  age: number;
}

function logAge(obj: userAge) {
  console.log(obj.age);
}
let user = { name: "Sang", age: 28 };
logAge(user);
```

이제는 logAge()의 인자가 좀 더 명시적으로 바뀌었습니다. logAge()의 인자는 userAge 라는 타입을 가져야한다.

인터페이스를 인자로 받아 사용할 때 항상 인터페이스의 속성 갯수와 인자로 받는 객체의 속성 갯수를 일치시키지 않아도 된다. 즉 인터페이스에 정의된 속성, 타입의 조건만 만족한다면 객체의 속성 갯수가 더 많아도 상관 없다는 의미입니다.

인터페이스에 선언된 속성 순서를 지키지 않아도 됩니다.

#

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```

```ts

```
