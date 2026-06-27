// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean
let isActive = true;
let isRealActive = new Boolean(true); // not recomended

//null and undefined

let firstname = null;
let lastname = undefined;

// console.log(firstname);
// console.log(lastname);

// string

let mystring = "hello";
let myStringOne = "Hola";
let username = "aman";

let oldGreet = mystring + " " + "aman";
console.log(oldGreet);

let greetMessage = `hello ${username}!`;
let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);

let sm1 = Symbol("aman");
let sm2 = Symbol("aman");

console.log(sm1 == sm2);
