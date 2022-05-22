"use strict";
let a;
a = "Mark"; // 됨
a = 39; // 안 됨
function hello(b) {
    // 매개 변수가 number type 만 들어올 수 있음
}
hello(39); // 됨
hello("Mark"); // 안 됨
