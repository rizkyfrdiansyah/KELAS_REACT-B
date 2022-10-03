/**
 * ARLOJI
 *
 * VIncent punya koleksi arloji dia akan membagikan koleksinya kepada teman2.
 *
 * contoh :
 * let watches = ["G-Shock","Timex","Rolex"];
 *
 * Result:
 * Saya punya G-Shock, Timex, dan Rolex.
 *
 * contoh lain:
 * let watches = ['A','B','C','D','E'];
 *
 * Result:
 * Saya punya A, B, C, D, dan E.
 */

const mentionWatches = (watches) => {
  console.log("Saya punya " + watches.slice(0, -1).join(", ") + ", dan " + watches.slice(-1) + ".");
};

// Test Case
mentionWatches(["Rolex", "Dublot", "DW"]);
// Saya punya Rolex, Dublot, dan DW.

mentionWatches(["A", "B", "C", "D", "E"]);
// Saya punya A, B, C, D, dan E.
