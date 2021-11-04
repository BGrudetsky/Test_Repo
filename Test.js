//types of variables
const second = 2;
const SECOND = 2;

const $third = 2;
let text = "string text";

const PI = 3.14;
let summ = second + SECOND + $third;
console.log(summ);
let decrease = summ - $third;
console.log(decrease);

const first_func = function () { console.log("Hello Bohdan!") };
first_func();

const isFalse = false;
console.log(isFalse);

//check data types
let nextA;
let nextB = [];
console.log(typeof (text));
console.log(typeof (PI));
console.log(typeof (isFalse));
console.log(typeof (nextA));
console.log(typeof (nextB));

//increase value
const a = 15; //types of variables
const b = 20;
const sum = a + b;
console.log (a + b);

//shorter way
let c = a; //types of variables
c += b;
console.log(c);

//another example
const constA = 15;
const constB = 5;
const result = constA * constB * constB;
console.log(result);

//shorter way
let result1 = constB * constB;
result1 *= constA;
console.log(result1); 

//decrease value
let d = 12;
let e = 7;
d = d - e;
console.log(d);

//shorter way
let newLetter = 12;
newLetter -= e;
console.log(newLetter);
