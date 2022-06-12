function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴 아무거나");

any1.toString();

// any의 오염
let looselyTyped: any = {};

// d의 타입은 any
const d = looselyTyped.a.b.c;

function leakingAny(obj: any): any {
  // a의 타입은 any
  //   const a = obj.num;
  // any 막기
  const a: number = obj.num;
  const b = a + 1;

  return b;
}

const c = leakingAny({ num: 1 });
c.indexOf("0");
