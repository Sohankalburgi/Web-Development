const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/productApp')
.then(()=>{
    console.log("Connection Established")
})
.catch(error=>{console.log("Connection Error")})


//validation 
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            maxlength:28,
        },
        price:{
            type:Number,
            required:false,
            min:[0,"the price is Min: 0"]
        },
        onSale:{
            type: Boolean,
            default : false
        },
        categories:{
            type:[String]
        },
        qty:{
            online:{
                type : Number,
                default : 0
            },
            inStore:{
                type : Number,
                default : 0
            }
        }
    }
);

const Product = mongoose.model("Product",productSchema);

// const bike = new Product({name:"Car",price:20000,categories:["Vehicle",123]});
// bike.save().then((data)=>{
//     console.log("IT WORKED")
//     console.log(data)
// }).catch(err=>{
//     console.log("ERROR")
//     console.log(err)
// })

// {new:true} is options which shows the updated data
Product.findOneAndUpdate({name:"Mountain Bike"},{price:200},{new:true, runValidators:true})
.then(data=>{
    console.log("IT WORKED")
    console.log(data)
}).catch(err=>{
    console.log(err)
}
)

// own methods
productSchema.methods.ownMethod = function(){
    console.log("HELLO MOSTLY USED FOR FREQUENT PURPOSE")
}

// middleware in mongoose
productSchema.pre('save',async ()=> console.log("the pre is executing before save"))