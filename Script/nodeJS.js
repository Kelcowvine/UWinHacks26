const fs = require("fs")

console.log("Node is running");
// 1️⃣ Read the file as text
const text = fs.readFileSync("../jsonData/MSFT.json");

//Parse JSON into a JS object/array
const data = JSON.parse(text);

for (const item of data) {
    const values = Object.values(item);
    const firstNum = values[0];
    const second = values[1];

    if (second == null){
        console.log(firstNum)
        continue;
    }
    console.log(`\t${firstNum}, ${second}`)

}

