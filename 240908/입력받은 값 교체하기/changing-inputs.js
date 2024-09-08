const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();
let arr = a.split(" ");

let n = arr[1];
let m = arr[0];

console.log(`${n} ${m}`);