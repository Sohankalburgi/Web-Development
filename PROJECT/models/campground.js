const mongoose = require('mongoose');
const Review = require('./review');
const { ref } = require('joi');
const Schema = mongoose.Schema;


const opts = {toJSON :{ virtuals: true }};

const CampgroundSchema = new Schema({
    title : {
        type:String,
        required : true
    },
    geometry:{
        type:{
            type:String,
            enum :['Point'],
            required : true
        },
        coordinates:{
            type:[Number],
            require:true
        }
    },
    price : {
        type : Number,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    images : [
        {
            url:String,
            filename:String
        }
    ] ,
    reviews :[
        {
            type : Schema.Types.ObjectId,
            ref : 'Review'
        }
    ],
    author :{
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
},opts);

CampgroundSchema.virtual('properties.popUpMarkUp').get(function(){

    return `<a href=/campgrounds/${this._id}>${this.title}</a>`;
})

CampgroundSchema.post('findOneAndDelete',async function (doc){
    if(doc){
        await Review.deleteMany({
            _id : {
                $in : doc.reviews
            }}
        )
    }
})

const Campground = mongoose.model('Campground',CampgroundSchema);

module.exports = Campground; 