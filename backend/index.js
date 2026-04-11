// const cat = requir<D->e('cat-me')
// console.log(cat)
// const dog = require('dog-me')
// console.log(dog)

const math = require('./math')
console.log(math.add(2,3))
console.log(math.sub(2,3))
console.log(math.mul(2,3))
console.log(math.div(2,3))

// const fs = require('fs')
// console.log("1. Start")

// fs.writeFileSync('./hello.txt',"I don't wanna study");
// fs.writeFileSync('./hello.txt',"I do wanna study");
// fs.appendFileSync('./hello.txt',"\nI don't wanna do anything");
// const data = fs.readFileSync('./hello.txt',{encoding:'utf-8'});
// console.log(data)
// console.log("2. After file sync")

// fs.writeFile('./details.txt',"omg why this",(err)=>{
//     if(err) throw err;
//     console.log("File updated")
// })
// fs.readFile('./details.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     } 
//     else{
//     console.log(data)
//     console.log("3. After Aysnc")
//     }
// })
// console.log("4. I will run last")

// function userLogin(username){
//     const time = new Date().toLocaleString();
//     const log = ⁠ User: ${username} logged in at ${time}\n ⁠;
//     fs.appendFile('./login.txt',log,(err)=>{
//         if(err){
//             console.log(err)
//             return;
//         }
//     });
// }
// // userLogin("Dev");
// userLogin("Ram");
