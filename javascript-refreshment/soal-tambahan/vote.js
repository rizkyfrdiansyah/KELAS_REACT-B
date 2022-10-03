/**
 * VOTING
 *
 * Sebuah daerah bernama Grand Line, akan memilih bajak laut terhebat.
 * Sehingga tiap2 daerah akan di pilih suara terbanyak dan dijadikan bajak laut terhebat.
 *
 * contoh:
 * let votes = ["luffy","teach","luffy","buggy","luffy"]
 *
 * Result:
 * Winner is luffy with 3 votes.
 *
 * contoh lain:
 * let votes = ['lUFFy','LuffY','TEACH','jeki','BuGGy]
 *
 * Result:
 * Winner is luffy with 2 votes.
 */

/**
 * Hitunglah jumlah huruf vocal dalam sebuah string.
 *
 * contoh:
 * let str = saya makan malam dengan ikan goreng
 *
 * Huruf vocal: a i u e o
 *
 * Result :
 * {
 *      a: 8,
 *      i: 1,
 *      u: 0,
 *      e: 2,
 *      o: 1,
 * }
 *
 */

let str = "saya makan malam dengan ikan goreng";

const countVocals = (str) => {
  let result = {
    a: 0,
    i: 0,
    u: 0,
    e: 0,
    o: 0,
  };

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      result.a++;
    } else if (str[i] === "i") {
      result.i++;
    } else if (str[i] === "u") {
      result.u++;
    } else if (str[i] === "e") {
      result.e++;
    } else if (str[i] === "o") {
      result.o++;
    }
  }

  return result;
};

// console.log(countVocals(str));

const countPirate = (votes) => {
  let result = {
    luffy: 0,
    teach: 0,
    jeki: 0,
    buggy: 0,
  };

  for (let i = 0; i < votes.length; i++) {
    if (votes[i].toLowerCase() === "luffy") {
      result.luffy += 1;
    } else if (votes[i].toLowerCase() === "teach") {
      result.teach += 1;
    } else if (votes[i].toLowerCase() === "jeki") {
      result.jeki += 1;
    } else if (votes[i].toLowerCase() === "buggy") {
      result.buggy += 1;
    }
  }

  return result;
};

const winnerPirate = (votes) => {
  let votesObject = countPirate(votes);

  let winnerName = "";
  let winnerVotes = 0;

  for (let key in votesObject) {
    if (votesObject[key] > winnerVotes) {
      winnerVotes = votesObject[key];
      winnerName = key;
    }
  }

  return `Winner is ${winnerName} with ${winnerVotes} votes.`;
};

console.log(winnerPirate(["luFFY", "lUffy", "TEACH", "teach", "luffy"]));
console.log(winnerPirate(["BUGGY", "buggy", "teach", "teach", "buggy"]));
