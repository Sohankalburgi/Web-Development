const express = require('express')
const session = require('express-session')
const app = express();
const sessionOptions = {secret : 'thisisnotagoodsecret', resave : false, saveUninitialized : false}
app.use(session(sessionOptions))

app.get('/viewcount',(req,res)=>{
    if(req.session.count){
        req.session.count +=1;
    }
    else{
        req.session.count = 1;
    }
    res.send(`you have viewed the page = ${req.session.count}`)
})

app.listen(3000,()=>{
    console.log('Serving')
})