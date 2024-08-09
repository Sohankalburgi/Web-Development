const Review = require('../models/review')
const Campground = require('../models/campground')

module.exports.createReview = async(req,res)=>{
    const id = req.params.id;
    const camp = await Campground.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    camp.reviews.push(review);
    await review.save();
    await camp.save();
    
    console.log('fadshfkjasdfjksdjfklasjfkalsjfakljfkalsfjklasdf')
    req.flash('success','new review is created')
    res.redirect(`/campgrounds/${camp._id}`);
}

module.exports.deleteReview = async(req,res)=>{
    const {id,reviewId} = req.params;
    await Campground.findByIdAndUpdate(id,{$pull : {reviews : reviewId}})
    await Review.findByIdAndDelete(req.params.reviewId);
    req.flash('success','review is deleted')
    res.redirect(`/campgrounds/${id}`)
}