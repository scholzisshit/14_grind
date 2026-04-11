const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//     console.log("Request received");
//     res.end("biaaatchhhhhhhh");
// });
//
// server.listen(3000, () => {
//     console.log("Server is listening on port 3000");
// });

// sync
// fs.writeFile('./async.txt','This is async File');
// fs.writeFile('./sync.txt','This ia a sync File');
//
// fs.readFile('./async.txt','utf8',(err,data)=>{
// console.log("data")
// })
// fs.readFile('./sync.txt','utf8')
//
// const.data = fs.readFileSync(./sync)

fs.writeFile('./async.txt',"This is an async file")

fs.writeFileSync('./sync.txt',"This is a sync file")

fs.readFile('./async.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
})
const data=fs.readFileSync('./sync.txt','utf8')
console.log(data)
//user login log
// routing
