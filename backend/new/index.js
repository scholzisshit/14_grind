const express = require('express')
const app  = express()

app.listen(4000,()=>{
  console.log('runna')
})

app.get('/',(req,res)=>{
  res.sendFile('./pages/index.html',{root:__dirname})

})

app.get('/about',(req,res)=>{
  res.sendFile('./pages/about.html',{root:__dirname})
})


app.use((req,res)=>{
  res.sendFile('./pages/404.html',{root:__dirname})
})
