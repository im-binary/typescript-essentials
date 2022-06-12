function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error("failed");
}

function infiniteLoop(): never {
  while (true) {}
}

declare const abc: string | number;

if (typeof abc !== "string") {
  // never 타입
  abc;
}

// type Indexable<T> = T extends string ? T & { [index: string]: any } : never;
// type ObjectIndexable = Indexable<{}>;
