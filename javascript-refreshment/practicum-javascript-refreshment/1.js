var a = 5;
let b = "Kampus Merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkap_arr = [a, b, nama, terdaftar];

function perkenalan() {
  let asal = "indonesia";
  return console.log("perkenalkan nama saya " + nama + " nomor urut " + a + " sekarang sedang mengikuti " + b + " berasal dari " + asal);
}

if (terdaftar === true) {
  console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
nama = b;

console.log("array = " + nama);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();

/** Jawaban
 * a. console.log(lengkap_arr[2])
 * b. mengganti let terdaftar = true;
 * c. perkenalan()
 */
