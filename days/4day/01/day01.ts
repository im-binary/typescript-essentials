// Primitive

type MyStringType = string;
const str = "world";
let myStr: MyStringType = "hello";
myStr = str;

// Union Type

let person: string | number = 0;
// person1 = "Mark";
type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = "Anna";

// Tuple

let person22: [string, number] = ["Mark", 35];
type PersonTuple = [string, number];
let another22: PersonTuple = ["Anna", 24];

// Function

type EatType = (food: string) => void;
