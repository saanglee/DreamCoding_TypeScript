# Enum

Enum은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다.

```ts
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
```

Enum타입을 사용할 때 주의할 점은 Type Error가 나지 않는 다는 것입니다.

```ts
let day: Days = Days.Friday;

day = 10; // 주의: Type에러가 나지 않는다.
```

위 코드와 같이 변수 day에 Days타입의 값을 할당한 뒤 다른 타입의 값 10재할당할 경우 Type Error 없이 그대로 할당이 됩니다.
타입스크립트 사용 시에는 Enum보다는 Union타입을 써서 타입을 보장하여 사용하는 것이 더 좋습니다.

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

```ts

```
