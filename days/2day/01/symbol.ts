console.log(Symbol("foo") === Symbol("foo")); // false

const sym = Symbol();

const obj = {
    [sym]: "value"
};

obj[sym];

// 함수 대문자 Symbol
// 타입 소문자 symbol
