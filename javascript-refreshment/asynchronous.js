// Promise

// Dalam promise ada 3 state(kondisi)
// 1. Pending
// 2. Reject
// 3. Fulfilled

// Promise menggunakan variable
// const janjiManis = new Promise((resolve, reject) => {
//   try {
//     resolve("Janji manis ditepati");
//   } catch (err) {
//     reject("Janji manis tidak ditepati");
//   }
// });

// janjiManis
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log(typeof janjiManis);

const janjiManis = (str) => {
  return new Promise((resolve, reject) => {
    try {
      resolve("Janji manis di tepati dalam function, " + str);
    } catch (err) {
      reject("Janji manis tidak di tepati dalam function, " + str);
    }
  });
};

// janjiManis("Testings")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

async function tests() {
  let temp = await janjiManis("Testings");
  console.log(temp);
}

tests();
