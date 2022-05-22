# 1 day

- typescript 설치

  - tsc 쓸 때는 script에 추가해주어야 한다.
  - `yarn add typescript`로 설치한다.
  - `npx tsc --init` 을 하면 tsconfig.json 파일이 생성된다.
  - `npx tsc` 만 하면 모든 파일이 js로 transpile 된다.
  - `npx tsc -w`를 하면 ts 파일의 변경을 감지하여 js 파일을 업데이트한다.
  - `yarn build` 를 통해 typescript를 transpile 할 수 있도록 script 추가한다.

- Type Annotation
  - `let a = 'Mark';` 를 하게되면 a에 자동으로 **string** 타입이 지정된다.
  - `let a;` 를 하게되면 **any** 타입이 지정된다.
  - `let a: string;` 를 하여 **string** 타입으로 지정할 수도 있다.
  - `let a: number;` 를 하면 `a = 'Mark';` 에서는 컴파일 오류가 발생한다.
  - `function hello(b: number) {}` 와 같이 인자(매개변수)에도 각각 타입을 지정할 수 있다.
  - 위와 같이 할 경우, `hello('Mark');` 에서 컴파일 오류가 발생한다.
