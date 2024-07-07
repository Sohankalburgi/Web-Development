const mongoose = require('mongoose');
const cities = require('./cities')
const Campground = require('../models/campground');
const {descriptors,places} = require('./seedHelper')


// To Connect to the MongoDB SERVER 
mongoose.connect('mongodb://127.0.0.1:27017/Campground').then(()=>{
    console.log('Mongo DB is connected')
})
.catch(err=>{
    console.log('Error')
})


const sample = arr =>{return arr[Math.floor(Math.random()*arr.length)]};

const seedDB = async()=>{
    await Campground.deleteMany({})
    for(let i=0;i<50;i++){
        const rand1000 =  Math.floor(Math.random()*1000);
        const randomprice = Math.floor(Math.random()*1000);
        const randomImage = Math.floor(Math.random()*100)
        const  camp = new Campground({
            location : `${cities[rand1000].city}, ${cities[rand1000].state}`,
            title : `${sample(descriptors)} ${sample(places)}`,
            image : `https://picsum.photos/200/300?random=${randomImage}`,
            description : 'lorem fdajsfkljdasfkanm daslfj kasj flaksjfkasjf',
            price : randomprice
        })
        await camp.save();
    }
}

seedDB();