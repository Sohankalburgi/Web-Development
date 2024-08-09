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
            description : 'lorem fdajsfkljdasfkanm daslfj kasj flaksjfkasjf',
            price : randomprice,
            author : '669391fda10a395fcfa5c69a',
            geometry : {
                type:"Point",
                coordinates :[cities[rand1000].longitude,cities[rand1000].latitude]
            },
            images : [
                {
                    url: 'https://res.cloudinary.com/dluen2r3i/image/upload/v1721052170/Campground/lag33ipcu9sev9lkd6rj.jpg',
                    filename: 'Campground/lag33ipcu9sev9lkd6rj',            
                },
                {
                    url: 'https://res.cloudinary.com/dluen2r3i/image/upload/v1721052171/Campground/oipuynyxw35jnbu3jpz7.jpg',
                    filename: 'Campground/oipuynyxw35jnbu3jpz7',
                }
            ]
        })
        await camp.save();
    }
}

seedDB();