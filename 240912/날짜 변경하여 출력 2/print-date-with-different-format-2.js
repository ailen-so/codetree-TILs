const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let yyyy = Number(input[0]);
let mm = Number(input[1]);
let dd = Number(input[2]);

[yyyy, dd, mm ] = [dd, mm, yyyy];

console.log(`${yyyy}.${mm}.${dd}`);