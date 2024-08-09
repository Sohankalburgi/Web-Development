const express = require('express')
const User = require('./models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const session = require('express-session')

const app = express();

const requireLogin = (req,res,next)=>{
    if(!req.session.user_id){
        res.redirect('/login')
    }else{
        next()
    }
}


mongoose.connect('mongodb://127.0.0.1:27017/AuthDemo')
.then(()=>{
    console.log('Mongo DB is connected')
}).catch((error)=>{
    console.log(error)
})

app.use(express.urlencoded({extended:true}))
app.use(session({
    secret : 'notagoodsecret'
}))
app.set('view engine','ejs');


app.get('/register',(req,res)=>{
    res.render('register')
})

app.get('/login', (req,res)=>{
    res.render('login')
})

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const user = await User.findOne({username : username});
    
    const isValid = await bcrypt.compare(password,user.password)
    console.log(isValid)
    if(isValid){
        req.session.user_id = user._id;
        res.redirect('/secret')
    }
    else{
        res.send('Password was incorrect !!! Login Failed')
    }
   
})

app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,12);
    const user = new User({
        username : username,
        password : hashedPassword
    })
    await user.save();
    req.session.user_id = user._id;
    res.send('User signed UP')
})

app.get('/secret',requireLogin,(req,res)=>{
    res.render('secret')

})
app.post('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/login')
})

app.listen(3000,()=>{
    console.log('Serving at port 3000');
})