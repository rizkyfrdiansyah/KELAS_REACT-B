// Perbedaan var, let, dan const

// ES5

// console.log(number);
// var number = 10;
// var number = 5;

// ES6
// console.log(number);
let number = 10;
number = "str";
// console.log(number)

const pi = 3.14;
// let euler = 2.78;
// pi = 10;

// console.log(pi)

// var scores = [1,2,3,4,5];
// let scores = [1, 2, 3, 4, 5];
// scores.push(10);    // push tambah di belakang
// scores.unshift(0);  // unshift tambah di depan
// console.log(scores);

// Hoisting: eksekusi sebuah proses di awal => var atau function
// Hoist = Mengangkat , Contoh kalimat: Hoist the flag = Angkat bendera

/** */

// Template Literal

// let kata1 = "saya";
// let kata2 = "makan";
// let kata3 = "malam";

// Result = saya makan malam.

// ES5
// console.log(kata1 + " " + kata2 + " " + kata3 + ".")

const strings = ["saya", "makan", "malam"];

// ES6
// console.log(`${strings[0]} ${strings[1]} ${strings[2]}.`)
// console.log(strings)

// Arrow Function

/**
 * Cara pembuatan function dalam javascript ada 3 macam:
 *   1. Declaration
 *  2. Expression
 *  3. Arrow
 * */

// ES5

// declaration
// hello("admin");
function hello(name) {
  console.log(`Hello, ${name}`);
}

// expression
const helloJuga = function (name, status) {
  console.log(`Hello, ${name} saya statusnya : ${status}`);
};
// helloJuga("vincent", "doubles");
// helloJuga = 10;
// console.log(helloJuga)

// ES6

const helloLagi = (name, job) => {
  console.log(`Hello, my name is ${name}, my job is ${job}`);
};
// helloLagi("vincent", "developer");

// High Order Function

// HOF: adalah sebuah built in function untuk array (yang lebih canggih)
// .forEach, .map, .filter

let scores = [10, 5, 2, 3, 12, 17, 15];

// ES5
for (let i = 0; i < scores.length; i++) {
  //   console.log(scores[i]);
}

// ES6
scores.forEach((score) => {
  // console.log(score)
});

// Study case: ubah tiap angka scores menjadi pangkat 2

// ES5
// let temp = [];
for (let i = 0; i < scores.length; i++) {
  //   temp.push(scores[i] ** 2);
}
// console.log(temp)
// ES6
// let temp = scores.map((score) => score ** 2);
// console.log(temp);

// Study Case: filter angka yang lebih dari 10

// ES5
// let penampung = [];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > 10) {
    // penampung.push(scores[i]);
  }
}

// ES6
let penampung = scores.filter((score) => score > 10);
// let penampung = scores.map(score => {
//     if(score > 10){
//         return score
//     }
// })
// console.log(penampung);

// Destructuring

let items = ["Laptop", 15000000, true];

// ES5
// let name = items[0]
// let price = items[1]
// let isSold = items[2]

// ES6
let [name, price, isSold] = items;

const item = {
  brand: "Mouse gaming",
  type: "mouse",
};

const { brand, type } = item;

// console.log(brand);
// console.log(type);

// ES6
// console.table(item);

// Rest dan Spread Operator

// rest operator

const profile = (...params) => {
  // console.log(params)
  const [name, age, job, skills, isAvailable] = params;
  console.log(`${name}, ${age}, ${job}, ${skills}, ${isAvailable}`);
};

// profile("vincent", 21, "designer", ["js", "flutter"], true);

// spread operator

let arr1 = [1, 2, 3];
// let arr2 = arr1;

// ES5
// let arr2 = arr1.slice()

// ES6
let arr2 = [...arr1];

arr2.push(5, 7);

console.log(arr1);
console.log(arr2);
