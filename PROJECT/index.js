if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}

// console.log(process.env.CLOUDINARY_KEY)
// console.log(process.env.CLOUDINARY_SECRET)
// console.log(process.env.CLOUDINARY_CLOUD_NAME)

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const ExpressError = require('./utils/ExpressError');
const campgroundRoutes = require('./routers/campgrounds')
const reviewRoutes  = require('./routers/reviews')
const session = require('express-session')
const flash = require('connect-flash')
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const UserRoutes = require('./routers/user')
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(mongoSanitize());

const sessionConfig = {
    name:'sessionbyname',
    secret: 'thisshouldbebettersecret',
    resave : false,
    saveUninitialized : true,
    cookie :{
        httpOnly : true,
       // secure : true, // this is enabled for httpS security
        expires : Date.now() +( 1000 * 60 * 60 * 24 * 7),
        maxAge :1000 * 60 * 60 * 24 * 7
    }
}

app.engine('ejs',ejsMate)
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(session(sessionConfig ))
// app.use(helmet({contentSecurityPolicy: false}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(flash());

app.use((req,res,next)=>{

    // this gives the user from the passport which is deserialised
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success')
    res.locals.error = req.flash('error')
    next();
})

app.use('/campgrounds',campgroundRoutes);
app.use('/campgrounds/:id/reviews',reviewRoutes);
app.use('/',UserRoutes);
// To Connect to the MongoDB SERVER 
mongoose.connect('mongodb://127.0.0.1:27017/Campground').then(()=>{
    console.log('Mongo DB is connected')
})
.catch(err=>{
    console.log('Error')
})

app.get('/',(req,res)=>{
    res.render('home');
})

// use this before the route handler




app.all('*', (req,res,next)=>{
    console.log('page not found')
    next(new ExpressError('Page Not found', 404));  
})


app.use((error,req,res,next)=>{
   
    const {statusCode = 500} = error;
    if(!error.message){
        error.message = 'Oh No something went Wrong';
    }
    res.status(statusCode).render('error',{error}) 
   
})

// To start to listen the server
app.listen(3000,()=>{
    console.log(    'The Server is Started On Port 3000');
})