const express = require('express');
const path = require('path')

const app = express()
const PORT = process.env.PORT || 8000

app.use( express.static(path.join(__dirname,'public')) )

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})

app.get('/trend',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','trend.html'))
})

app.get('/articles',(req,res)=>{
    res.send("<h1>Article Page</h1>")
})

app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'))
})

app.listen(PORT,()=>console.log(`Server listening on ${PORT}`))