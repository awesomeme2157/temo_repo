const path = require("path");

console.log(path.sep);

// displays full path name for the path
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

// displays base name for the path
const base = path.basename(filePath);
console.log(base);

// displays absolute(total) path name for the path 
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
