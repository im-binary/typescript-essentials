# 1 day

- tsc 쓸 때는 script에 추가해주어야 한다.
- `yarn add typescript`로 설치한다.
- `npx tsc --init` 을 하면 tsconfig.json 파일이 생성된다.
- `npx tsc` 만 하면 모든 파일이 js로 transpile 된다.
- `npx tsc -w`를 하면 ts 파일의 변경을 감지하여 js 파일을 업데이트한다.
- `yarn build` 를 통해 typescript를 transpile 할 수 있도록 script 추가한다. 