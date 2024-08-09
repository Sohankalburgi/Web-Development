const mongoose = require('mongoose');


const reviewSchema = new mongoose.Schema({
    rating : Number,
    body : String,
    author : {
        type : mongoose.SchemaTypes.ObjectId,
        ref:'User'
    }
});

module.exports = mongoose.model('Review',reviewSchema)