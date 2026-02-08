const fsModule = require("fs")

console.log("Node is running");
const file = fsModule.readFile("../jsonData/APPL.json");

//Parse JSON into a JS object/array
const data = JSON.parse(text);

console.log(data);

// Example: loop through items
data.forEach(item => {
    console.log(`${item.name} costs ${item.price}`);
});
