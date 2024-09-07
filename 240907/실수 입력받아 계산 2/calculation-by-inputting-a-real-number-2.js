const fs = require("fs");
let n = (fs. readFileSync(0).toString());
n = Number(n);

let result = n + 1.5;

console.log(result.toFixed(2))