const mongoose = require('mongoose');
const {Schema} = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDB').then(()=>{
    console.log('Mongo DB is connected')
}).catch(error=>{ console.log('Mongo DB connection ERROR!!!!');
    console.log(error)
 })

const userSchema = new Schema({
    username : String,
    age : Number
})

const tweetSchema = new Schema({
    text : String,
    likes : Number,
    user : {
        type : Schema.Types.ObjectId,
        ref : 'User'
    }
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet',tweetSchema);

const makeTweets = async() =>{
    const user = new User({username:'sohankalburgi7', age:21});
    const tweet1 = new Tweet({text : 'hello this is my first tweet ', likes : 0})
    tweet1.user = user;
    user.save();
    tweet1.save();
}

makeTweets();