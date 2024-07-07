const express = require('express')
const cookieParser = require('cookie-parser')
const app = express();

app.use(cookieParser('thisIsSecret'))

app.get('/greet',(req,res)=>{
    console.log(req.cookies)
    res.send('Hello there '+req.cookies.name);
})

app.get('/setname',(req,res)=>{
    res.cookie('name','steve')
    res.cookie('animal','GOAT')
    res.send('Sent the cookie')
})

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','grape',{signed:true})
    res.send('This is a signed cookie')
})

app.get('/verifysignedcookie',(req,res)=>{
    res.send(req.signedCookies)
})

app.listen(3000,()=>{
    console.log('Server started on port number 3000')
})