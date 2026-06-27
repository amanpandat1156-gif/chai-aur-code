// checking if a number is greaterr than another number:

let num1 = 5;
let num2 = 8;

/*
console.log("I am regular upper code");
if (num1 > num2) {
  console.log("num 1 is greater than num2");
} else {
  console.log("Nope,num1 is NOT greater");
}

console.log("I am regular bootom code");
*/
// checking if a string is equal to another string:

let username = "chai";
let anotherUsername = "chai";

if (username != anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username ");
}

// checking if a vriable is a number or not:

let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

// checking if a boolean value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  // console.log("Tea is NOT Ready");
}



// cheaking if an array  is empty or not:

let item = ["item 1","aman"]

console.log(item.length)

if (item.length == 0){
  console.log("Array is empty")

} else{
  console.log("Array is NOT empty")
}