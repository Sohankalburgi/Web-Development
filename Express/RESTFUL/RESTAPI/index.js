const express = require('express')
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));

const comments = [
    {
        id:uuid(),
        username:"sohan",
        comment:"Hi, hello"
    },
    {
        id:uuid(),
        username:'pragathi',
        comment:'how are you'
    },
    {
        id:uuid(),
        username:'monica',
        comment:'hi sohan and pragathi'
    }
]

console.log(comments)

app.listen(3000,()=>{
    console.log("Server Started on Port 3000")
})

app.get('/index',(req,res)=>{
  res.render('index.ejs',{comments:comments})
})

app.get('/commentform',(req,res)=>{
    res.render('commentform');
})

app.post('/commentform',(req,res)=>{
    console.log(req.body)
    req.body.id = uuid();
    comments.push(req.body)
    res.redirect('/index')
    console.log(comments)
})

app.get('/comment/:id',(req,res)=>{
    const {id} = req.params;
    console.log(id)
    let c = null;
    for(let comment of comments){
        if(comment.id === parseInt(id)){
            c = comment;
            break;
        }
    }
    res.render('show',{...c})
})

// app.get('/tacos',(req,res)=>{
//     res.send("The Get Request for Tacos is made")
// })

// app.post('/tacos',(req,res)=>{
//     console.log(req.body)
//     res.send("The Post Request for Tacos is made")
// })