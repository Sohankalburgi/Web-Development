const ExpressError = require('./utils/ExpressError')
const Campground = require('./models/campground')
const Schema = require('./Schema')
const Review = require('./models/review')

module.exports.isAuthenticated =  (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.session.returnTo = req.originalUrl;
        req.flash('error','you must login first')
        return res.redirect('/login')
    }
    next();
}

module.exports.storeReturnTo = (req, res, next) => {
    if (req.session.returnTo) {
        res.locals.returnTo = req.session.returnTo;
        console.log(req.session.returnTo)
    }
    next();
}

module.exports.validateCampground = (req,res,next)=>{
    const {error} = Schema.campgroundSchema.validate(req.body)
    console.log(req.body)
    console.log(error)
    if(error){
        const msg = error.details.map(el => el.message).join(',');
        console.log('error')
        throw new ExpressError(msg ,400)
    }
    else{
        console.log('pass')
        next();
    }
}

module.exports.isAuthor = async (req,res,next)=>{
    const {id} = req.params;
    console.log(id)
    const campground = await Campground.findById(id);
    if(!campground.author.equals(req.user._id)){
        req.flash('error','You are not authorized')
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}

module.exports.isReviewAuthor = async (req,res,next)=>{
    const {id,reviewId} = req.params;
    
    const review = await Review.findById(reviewId);
    if(!review.author.equals(req.user._id)){
        req.flash('error','You are not authorized')
        return res.redirect(`/campgrounds/${id}`)
    }
    next();
}

module.exports.validateReview = (req,res,next)=>{
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