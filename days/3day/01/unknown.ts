declare const maybe: unknown;

// unknown 은 number에 할당 불가능
// const aNumber: number = maybe;

if (maybe === true) {
  // maybe는 true라는 타입이 됨
  const aBoolean: boolean = maybe;

  // true이기 때문에 안됨
  // const aString: string = maybe;
}

if (typeof maybe === "string") {
  // maybe는 string이 타입이 됨
  const aString: string = maybe;
}
