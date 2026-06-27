const person = {
  name: "aman",
  greet() {
    console.log(`i m ${this.name}`);
  },
};
person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "amit" });
boundGreet();

// bilnd, call and apply