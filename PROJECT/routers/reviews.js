const express = require('express')
const catchAsync = require('../utils/catchAsync');
const Review = require('../models/review')
const Campground = require('../models/campground');
const {isAuthenticated,validateReview,isAuthor, isReviewAuthor}  = require('../middlewareforauth')
const review = require('../Controllers/reviews')

const router = express.Router({mergeParams:true});



router.post('/',isAuthenticated ,validateReview,catchAsync(review.createReview))

router.delete('/:reviewId',isAuthenticated,isReviewAuthor,catchAsync(review.deleteReview))

module.exports = router;
