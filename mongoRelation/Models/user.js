const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDB').then(()=>{
    console.log('Mongo DB is connected')
}).catch(error=>{ console.log('Mongo DB connection ERROR!!!!');
    console.log(error)
 })

const userSchema = new mongoose.Schema(
    {
        firstname : String,
        lastname : String,
        addresses : [
            {
                street : String,
                city : String,
                state : String,
                country : String
            }
        ]
    }
)

const User = mongoose.model('User',userSchema)

const makeUser = async ()=>{
    const u = new User({
        firstname : "Sohan",
        lastname : "kalburgi"
    })
    u.addresses.push(
        {
            street : '356, H18 9th J main Road',
            city : 'Bangalore',
            state : 'Karnataka',
            country : 'India'
        }
    )
    const res = await u.save();
    console.log(res);    
}
makeUser()