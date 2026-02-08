const fsModule = require("fs")

console.log("Node is running");
// 1️⃣ Read the file as text
const text = fs.readFileSync("../jsonData/AMZN.json");

//Parse JSON into a JS object/array
const data = JSON.parse(text);




for (const item of data) {
    const values = Object.values(item);
    const firstNum = values[0];
    const second = values[1];

    if (second == null){
        console.og(firstNum)
        continue;
    }
    console.log(`\t${firstNum}, ${second}`)

}
//write this to the html file


// ExpressJS
route.get('/', async (req, res) => {
    // logic

    res.sendFile(path.join(__dirname), '')
})