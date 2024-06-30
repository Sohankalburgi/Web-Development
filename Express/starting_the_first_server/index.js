const express = require('express');

const app = express();
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})

// this is use to call it whenever there is request from the client at each time
// app.use((req,res)=>{
//     console.log('WE got the new request');
//     // console.dir(req);
//     res.send('Hello we got the response');
//     console.log(req.url)
    
// })

app.get('/q/:name',(req,res)=>{
    console.log(req.params.name)
    console.log(req.query)
    res.send(`Hello ${req.params.name}`);
})

app.get('/q/:name/id/:age',(req,res)=>{
    const details = req.params;
    console.log(details)
    res.send(`<h1>Hello ${details.name} and your age is ${details.age}`)
})

app.get('/a',(req,res)=>{
    console.log(req.params.name)
    console.log(req.query)
    res.send(`Hello ${req.query.name} and your age is ${req.query.age}`);
})

app.get('/',(req,res)=> res.send('this is home page'))

app.get('/sohan',(req,res)=>{
    console.log('hi sohan how are you')
    res.send('hi sohan how are you')

})

app.get('/pragathi',(req,res)=>{
    console.log('pragathi is idiot')
    res.send('pragathi is idiot')
})

app.post('/sohan',(req,res)=>{res.send("this is post request for /sohan")})

// this is should be last it comes according the order
app.get('*',(req,res)=>{
    res.send('404 page not found there is no mapping done')
})