const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDB').then(()=>{
    console.log('Mongo DB is connected')
}).catch(error=>{ console.log('Mongo DB connection ERROR!!!!');
    console.log(error)
 })

const productSchema = new mongoose.Schema(
    {
        name : String,
        price : Number,
        season :{
            type : String,
            enum :[ 'Spring', 'Summer', 'Winter' , 'Rainy']
        }
    }
)

const Product = mongoose.model('Product',productSchema);

Product.deleteMany({});

// Product.insertMany([
//     {name : "Mango", price : 120, season : 'Summer' },
//     { name: "Apple", price : 160, season : 'Winter'},
//     { name: 'Grape', price : 60, season : 'Spring' }]
// )

// const farmSchema = new mongoose.Schema({
//     name : String,
//     city : String,
//     products : [{
//         type : mongoose.SchemaTypes.ObjectId,
//         ref : 'Product'
//     }]
// })
 
// const Farm = mongoose.model('farm',farmSchema);

// const makeFarm = async()=>{
//     const farm = new Farm({
//         name : 'sohan farm stand',
//         city : 'bangalore'
//     })
//     const mango = Product.findById({name : 'Mango'})
//     farm.products.push(mango);
//     console.log(farm);
// }

// makeFarm();