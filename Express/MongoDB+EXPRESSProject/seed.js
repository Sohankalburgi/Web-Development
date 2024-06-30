const Product = require('./models/product')
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/farmStand')
.then(()=>[
    console.log("Connection Established Successfully")
])
.catch(err=>{
    console.log("Internal Connection Error")
})

const product = new Product({
    name : "Apple",
    price : 130,
    categories : 'fruit'
})

product.save().then((data)=>{
    console.log("IT WORKED")
    console.log(data)
}).catch(err=>{
    console.log(err)
})

Product.insertMany([
    {name : "Lady Finger", price : 45, categories:"vegetable"},
    {name : 'Milk' , price : 25, categories :'dairy'}]
).then((data)=>{
    console.log('this worked')
    console.log(data)
}).catch(err=>{
    console.log(err)
})