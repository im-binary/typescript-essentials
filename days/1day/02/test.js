"use strict";
let a;
a = "Mark"; // 됨
// a = 39; // 안 됨
function hello(b) {
    // 매개 변수가 number type 만 들어올 수 있음
}
hello(39); // 됨
// hello("Mark"); // 안 됨
/**
 * tsc transpile 오류
 *
 * ➜  typescript-essentials git:(main) ✗ yarn build
 * yarn run v1.22.18
 * $ tsc
 * days/1day/02/test.ts:5:1 - error TS2322: Type 'number' is not assignable to type 'string'.
 *
 * 5 a = 39; // 안 됨
 *   ~
 *
 * days/1day/02/test.ts:13:7 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
 *
 * 13 hello("Mark"); // 안 됨
 *          ~~~~~~
 *
 *
 * Found 2 errors in the same file, starting at: days/1day/02/test.ts:5
 *
 * error Command failed with exit code 2.
 * info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
 */ 
