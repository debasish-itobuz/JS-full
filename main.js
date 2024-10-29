// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// let age = 22;
// let cond = age >= 22 ? "Wine" : "Water";
// console.log(cond);

//function declaration
// function calc(birthYear) {
//   return 2024 - birthYear;
// }
// const age1 = calc(1990);
// console.log(age1);

//function expression
// const calc2 = function (birthYear) {
//   return 2024 - birthYear;
// };
// const age2 = calc2(1990);
// console.log(age2);

//arrow function
// const calc3 = birthYear => 2024 - birthYear;

// const age3 = calc3(1990);
// console.log(age3);

//function call within another function

// function fruitPieces(fruit) {
//   return fruit * 2;
// }

// function fruitProcessor(apple, orange) {
//   const applePieces = fruitPieces(apple);
//   const orangePieces = fruitPieces(orange);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(5, 6));

//Array

// const calcAge = function(birthYear){
//     return 2024 - birthYear
// }
// const years = [1990, 1991, 2000, 2008]
// // console.log(calcAge(years))
// const calYears = years.map((item)=>calcAge(item))
// console.log(calYears)

//object

// const jonas = {
//   firstName: "Jonas",
//   lastName: " Jash",
//   job: "Teacher",
// };

// console.log(jonas.firstName);
// console.log(jonas.job);
// console.log(jonas["firstName"]);
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);
// const interestedIn = prompt("select firstName, lastName, job");
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("Wrong request.. Choose again.");
// }

// jonas.friends = ["jay", "kay", "lisa"];
// console.log(jonas);
// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} and his best friend is ${jonas.friends[0]}`
// );

//object methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: " Jash",
//   job: "Teacher",
//   birthYear: 1991,
//   friends: ["jay", "kay", "lisa"],
//   hasDriversLisence: true,
// calcAge: function(birthYear){
//     return 2024 - birthYear
// }

//   calcAge: function () {
//     console.log(this);
//     return 2024 - this.birthYear;
//   },
// };

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     }, and has ${this.hasDriversLisence ? "a" : "no"} driving lisence`;
//   },
// };

//   console.log(jonas)
//   console.log(jonas.calcAge(1991))
//   console.log(jonas["calcAge"](1992))

// console.log(jonas.calcAge());
// console.log(jonas["calcAge"]());

// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(
//   `${jonas.firstName} is a ${jonas.calcAge()} years old ${jonas.job}, and has ${
//     jonas.hasDriversLisence ? "a" : "no"
//   } driving lisence`
// );

// console.log(jonas.getSummary());

// loops

// for (let gym = 1; gym <= 10; gym++) {
//   console.log(`Lifting weights repetation ${gym} `);
// }

//loop array
// const jonas = ["Jonas", " Jash", "Teacher", 1991, ["jay", "kay", "lisa"], true];
// const types = [];
// print all key and values
// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);
//   types[i] = typeof jonas[i];
// }

// console.log(types);

// const birthYear = [1990, 2000, 1991, 2004];
// const ages = [];

// for (let i = 0; i < birthYear.length; i++) {
//   let age = 2024 - birthYear[i];
//   ages.push(age);
// }
// console.log(ages);

//break & continue
// for (let i = 1; i <= 10; i++) {
//     if (i === 5) break;
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) continue;
//   console.log(i);
// }

//loop backward
// const jonas = ["Jonas", " Jash", "Teacher", 1991, ["jay", "kay", "lisa"], true];
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i], typeof jonas[i]);
// }

//loop inside a loop
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(" * ");
//   }
//   console.log("\n");
// }

// for (let i = 1; i <= 5; i++) {
//   let line = ""
//   for (let j = 1; j <= i; j++) {
//     line +="* "
//   }
//   console.log(line);
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//   console.log(`....Started Exercise ${exercise}.....`);
//   for (let lift = 1; lift <= 5; lift++) {
//     console.log(`Exercise ${exercise} : lift weight ${lift}`);
//   }
// }

//while
// let lift = 1;
// while (lift <= 5) {
//   console.log(`Lift weight ${lift}`);
//   lift++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
}
console.log(`You rolled a 6`);
