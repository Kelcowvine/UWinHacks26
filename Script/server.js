const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

http.createServer((req, res) => {
    if (req.url === "/") {
        // Serve index.html (assume it's in project/)
        const htmlPath = path.join(__dirname, "financial_report_display.html");
        const html = fs.readFileSync(htmlPath, "utf8");
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(html);

    } else if (req.url === "/data/msft") {
        // Serve JSON file from jsonData/
        const jsonPath = path.join(__dirname, "..", "jsonData", "MSFT.json");
        const jsonData = fs.readFileSync(jsonPath, "utf8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonData);

    }
    else if (req.url === "/data/aapl") {
        const jsonPath = path.join(__dirname, "..", "jsonData", "AAPL.json");
        const jsonData = fs.readFileSync(jsonPath, "utf8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonData);
    }

    else if (req.url === "/data/amzn") {
        const jsonPath = path.join(__dirname, "..", "jsonData", "AMZN.json");
        const jsonData = fs.readFileSync(jsonPath, "utf8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonData);
    }

    else if (req.url === "/data/goog") {
        const jsonPath = path.join(__dirname, "..", "jsonData", "GOOG.json");
        const jsonData = fs.readFileSync(jsonPath, "utf8");
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(jsonData);
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found");
    }
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
