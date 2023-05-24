const fs = require("fs");

const first = fs.readFileSync(`./content/test1.txt`, "utf-8");
const second = fs.readFileSync(`./content/test2.txt`, "utf8");

console.log(first, second);

fs.writeFileSync(`./content/result-sync.txt`, `Here is the result :- ${first}, ${second}`, { flag: `a` });