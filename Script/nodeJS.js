const fs = require("fs");

console.log("Node is running");
// 1️⃣ Read the file as text
const text = fs.readFileSync("AAPLE.json", "utf8");

// 2️⃣ Parse JSON into a JS object/array
const data = JSON.parse(text);

console.log(data);

// Example: loop through items
data.forEach(item => {
    console.log(`${item.name} costs ${item.price}`);
});
