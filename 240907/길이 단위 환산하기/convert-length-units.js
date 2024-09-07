let ft = 30.48

const fs = require("fs");

let a = fs. readFileSync(0).toString();
a = Number(a);

console.log(`${ft}*a\.toFixed(1)`);