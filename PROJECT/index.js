const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Campground = require('./models/campground');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const Review = require('./models/review')
const Schema = require('./Schema')
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.engine('ejs',ejsMate)
app.use(methodOverride('_method'))
app.use(express.urlencoded())

// To Connect to the MongoDB SERVER 
mongoose.connect('mongodb://127.0.0.1:27017/Campground').then(()=>{
    console.log('Mongo DB is connected')
})
.catch(err=>{
    console.log('Error')
})

const validateCampground = (req,res,next)=>{
    
    
    const {error} = Schema.campgroundSchema.validate(req.body)
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg ,400)
    }
    else{
        next();
    }
}

const validateReview = (req,res,next)=>{
    const {error} = Schema.reviewSchema.validate(req.body)
    if(error){
        console.log(error)
        const msg = error.details.map(e=>e.message).join(',');
        throw new ExpressError(msg,400);
    }
    else{
        next();
    }
}

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/campgrounds',catchAsync(async (req,res,next)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index',{campgrounds})
    
}))

app.get('/campgrounds/new',(req,res)=>{
    res.render('campgrounds/new');
})

app.get('/campgrounds/:id', catchAsync(async(req,res,next)=>{
    const {id} = req.params;
    const Camp = await Campground.findById(id).populate('reviews');
    console.log(Camp)
    res.render('campgrounds/show',{Camp})
}))

app.get('/campgrounds/:id/edit', catchAsync(async(req,res,next)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit',{camp})
}))

app.put('/campgrounds/:id', validateCampground,catchAsync(async(req,res,next)=>{
    const {id} = req.params;
  
    const camp = await Campground.findByIdAndUpdate(id,req.body.campground);
    
    res.redirect(`/campgrounds/${id}`)
}))

app.post('/campgrounds/:id/reviews',validateReview,catchAsync(async(req,res)=>{
    const id = req.params.id;
    const camp = await Campground.findById(id);
    const review = new Review(req.body.review);
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    
    console.log('fadshfkjasdfjksdjfklasjfkalsjfakljfkalsfjklasdf')

    res.redirect(`/campgrounds/${camp._id}`);
}))

app.post('/campgrounds',validateCampground,catchAsync(async (req,res,next)=>{
    const campgroundSchema = joi.object
    const newCamp = new Campground(req.body);
    await newCamp.save() 
    res.redirect('/campgrounds')
}))

app.delete('/campgrounds/:id',catchAsync(async(req,res,next)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
    
}))

app.delete('/campgrounds/:campId/review/:reviewId',catchAsync(async(req,res)=>{
    const {campId,reviewId} = req.params;
    await Campground.findByIdAndUpdate(campId,{$pull : {reviews : reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId);
    res.redirect(`/campgrounds/${campId}`)
}))

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