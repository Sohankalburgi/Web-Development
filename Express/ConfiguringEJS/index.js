const express = require('express')

const app = express();

const path = require('path');

app.use(express.static(path.join(__dirname,'/assets')))

app.set('view engine','ejs')

app.set('views',path.join(__dirname,'/views'))

app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/random',(req,res)=>{

    let num = Math.floor(Math.random()*10)+1;

    res.render('random',{rand:num})
})

app.get('/list',(req,res)=>{
    const list = ['sohan','monica','pragathi'];
    res.render('list',{names:list})
})

app.listen(3000,()=>{
    console.log("The Server is started at Port Number 3000 ")
})