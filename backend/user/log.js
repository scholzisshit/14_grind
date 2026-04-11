const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log("Request received");

    const log = `User logged in at ${new Date().toLocaleString()}\n`;

    fs.appendFile('./Server.txt', log, (err) => {
        if (err) {
            console.error("Error writing log:", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }

        res.write("hi\n");
        res.end("this is the webpage");
    });
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
