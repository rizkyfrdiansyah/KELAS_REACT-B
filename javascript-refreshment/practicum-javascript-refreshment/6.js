let stats = [1.5, 2.56, 5.1, 12.33];

stats = stats.map((stat) => Math.round(stat));

// console.log(stats);

let temp = [];
for (let i = 0; i < stats.length; i++) {
  temp.push(Math.round(stats[i]));
}
// console.log(temp);

/**
 * BUILT IN FUNCTION => MATH
 *
 * a. Rounding (Pembulatan)
 * - Math.ceil()    => Pembulatan ke atas   Misal : Math.ceil(1.2) => 2
 * - Math.floor()   => Pembulatan ke bawah  Misal : Math.floor(3.7) => 3
 * - Math.round()   => Pembulatan mendekati angka di atas atau di bawah
 * => Math.round(5.7) => 6, Math.round(1.2) => 1
 */
