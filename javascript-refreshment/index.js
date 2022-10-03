// ES5 => 2009
// ES6 => 2015
// ES7 => 2016

// ES 2021
// ES 2022

// array
// let students = ["Vincent", 17, true];

// object
// let student = {
//   name: "Vincent",
//   age: 17,
//   isGraduated: true,
// };

// console.log(student.name);
// console.log(student["age"]);

// destructuring array dan object

// DESTRUCTURING ARRAY
// ES5
// let profiles = ["Admin", 250, false];

// let name = profiles[0];
// let score = profiles[1];
// let isAvailable = profiles[2];

// ES6
// let [name, score, isAvailable] = profiles

// console.log(name, score, isAvailable)

// DESTRUCTRUING OBJECT

let keranjang = {
  item: "Laptop",
  price: 17500000,
  type: "type1",
  category: "category1",
  stock: 10,
};

// let { item, price, type, category, stock } = keranjang;

// console.log(keranjang);

let numbers = [10, 2, 5, 3, 7, 12, 17, 15];

for (let number of numbers) {
  //   console.log(number);
}

// ES5
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// ES6
// numbers.forEach((number) => {
//   console.log(number);
// });

let items = {
  name: "apple",
  stock: 3,
  price: 12500000,
};

// for (let key in items) {
//   console.log(key);
//   console.log(items[key]);
// }

function hello(name) {
  //   console.log(`Hello, ${name}`);
  //   console.log("function uda jalan");
  //   return `Hello, ${name}`;
}

// invoke function
// console.log(hello("Vincent"));

// jQuery => identik dgn $ (document.querySelector)
// ajax => asynchronouse js xml

// promise dan async await sama, bedanya di penulisan yg disebut "Syntactical Sugar"
