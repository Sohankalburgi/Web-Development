const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const Product = require('./models/product')
const methodOverride = require('method-override')
const app = express();

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://localhost:27017/farmStand')
.then(() => console.log("Mongo DB Connected"))
.catch((err)=>{console.log("Mongo DB connection has Failed");
    console.log(err)
})


app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/products',async(req,res)=>{
    const category = req.query.categories;
        
    const products = await Product.find({categories:category})
    res.render('index',{products})
})

app.get('/products',async (req,res)=>{
    const products = await Product.find()
    console.log(products)
    // this is because it is in list
    console.log(products.length)
    res.render('index',{products})
})

app.get('/products/new',(req,res)=>{
    res.render('newForm');
})

app.get('/products/:id',async(req,res)=>{
    const foundProduct = await Product.findById(req.params.id);
    console.log(foundProduct)
    console.log(req.params.id)
    res.render('show',{foundProduct})
})



app.post('/products',async (req,res)=>{
    const formData = req.body;
    const NewProduct = new Product(formData);
    const saveProduct = await NewProduct.save();
    res.redirect('/products')
})

app.get('/products/:id/edit',async (req,res)=>{
    const foundProduct = await Product.findById(req.params.id);
    console.log(foundProduct)
    res.render('edit',{foundProduct});
})

app.put('/products/:id',async(req,res)=>{
    const id = req.params.id;
    const formData = req.body;
    const updateData = await Product.findByIdAndUpdate(id,formData,{runValidators:true});
    res.redirect(`/products/${id}`)
})

app.delete('/products/:id',async (req,res)=>{
    const id = req.params.id;
    const deleteData = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

app.listen(3000,()=>{
    console.log("the app is listening on port 3000");
})
