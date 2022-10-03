let bday = ["10-17", "05-19", "20-19"];

let bdayResult = bday.map((date) => {
  let temp = date.split("-").join("/");
  return temp;
});

// console.log(bdayResult)

/*
PROBLEM SOLVING

1. Ambil tiap element dalam array
2. split tiap element dalam array
3. join tiap element dalam array
*/

// CONTOH SPLIT dan JOIN

const data = "vincent,admin,ncent,tests,ashiapp";
// result = ["vincent","admin","ncent","tests","ashiapp"]
let tempData = data.split(",");
// console.log(tempData)

// result = vincent#admin#ncent#tests#ashiapp
let hashtagData = tempData.join("#");
console.log(hashtagData);
