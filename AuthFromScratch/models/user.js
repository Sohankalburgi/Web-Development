const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        username : {
            type: String,
            required : [true, 'User name cannot be blank'],
            unique : true
        },
        password : {
            type : String,
            required : [true,'Password cannot be Blank']
        }
    }
)

const User = mongoose.model('User',UserSchema);

module.exports = User;