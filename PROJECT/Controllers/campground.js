const Campground = require('../models/campground')
const {cloudinary} = require('../CloudinaryConfig/index')
const {config,geocoding,maplibregl} = require('@maptiler/client')
require('dotenv').config();

config.apiKey = process.env.MAPTILER_KEY;

module.exports.index = async (req,res)=>{
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index',{campgrounds})   
}

module.exports.rendernewForm = (req,res)=>{
    res.render('campgrounds/new')
}

module.exports.showCampground = async(req,res)=>{
    const {id} = req.params;
    const Camp = await Campground.findById(id).populate({
        path:'reviews',
        populate:{
            path:'author'
        }

    }).populate('author');
    console.log(Camp)
    res.render('campgrounds/show',{Camp})
}

module.exports.rendereditCampground = async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findById(id);
    res.render('campgrounds/edit',{camp})
}

module.exports.editCampground = async(req,res)=>{
    const {id} = req.params;
    const camp = await Campground.findByIdAndUpdate(id,req.body.campground);
    const imgs = req.files.map(f =>({url : f.path , filename : f.filename}))
    camp.images.push(...imgs);
    console.log('The edit campground')
    console.log(camp)
    await camp.save();
    if(req.body.deleteImages){
        for(let filename of req.body.deleteImages){
            cloudinary.uploader.destroy(filename)
        }
     await camp.updateOne({$pull :{ images : {filename:{ $in : req.body.deleteImages}}}})
     console.log(camp)
    }
    req.flash('success','Campground Updated')
    res.redirect(`/campgrounds/${id}`)
}

module.exports.newForm = async (req,res)=>{
    console.log(req.body)
    console.log(req.files)
    const result = await geocoding.forward(req.body.campground.location,{limit:1});
   
    const newCamp = new Campground(req.body.campground);
    newCamp.geometry = result.features[0].geometry;
    newCamp.images = req.files.map(f =>({ url : f.path , filename : f.filename}));

    console.log(req.files.map(f =>({ url : f.path , filename : f.filename})))
    newCamp.author = req.user._id;

    console.log(newCamp)
    await newCamp.save() 
    req.flash('success','succesfully made new campground')
    res.redirect(`/campgrounds/${newCamp._id}`)
}

module.exports.deleteCampground = async(req,res)=>{
    const {id} = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success','Campground Deleted')
    res.redirect('/campgrounds');
    
}