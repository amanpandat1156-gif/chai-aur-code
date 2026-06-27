/*
1. write a `while` loop that calculates the sum of all numbers from 1 to 5 and stores the result in a variable named `sum` .
*/

// let sum = 0;
// let i = 1;
// //1+2+3+4+5
// //3
// while (i <= 5) {
//   sum = sum + i;
//   // sum +=1
//   i++;
// }
// console.log(sum);

let sum = 0;
let i = 1;
while (i <= 5) {
  sum = sum + i; //sum += i
  i++;
}
// console.log(sum);
/*
2.
*/
let countdown = [];
let j = 5;
while (j > 0) {
  countdown.push(j);
  j--;
}
// console.log(countdown);

/*
3.
*/

let teacollection = [];
let tea;

// do {
//   prompt(`enter your favourite tea (type "stop" to finish)`);

//   if (tea !== "stop") {
//     teacollection.push(tea);
//   }
// } while (tea !== "stop");

/*
4.
*/

let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);

/*
5.
*/

let multipliedNumber = [];
let numbers = [2, 4, 6];

// for (initPhase; CSSConditionRule; incre/decre)

for (let l = 0; l < Number.length; l++) {
  //   takeNumber = numbers[l] * 2;
  //   multipliedNumber.push(takeNumber);

  multipliedNumber.push(numbers[l] * 2);
}
// console.log(multipliedNumber);


/*
6.
*/

let cities = ["Paris", "New York", "Tokyo", "London"]
let cityList = []
for (let c = 0; c < cities.length; c++) {
    const myCity = cities[c];
    cityList.push(myCity)
}
console.log(cityList);

