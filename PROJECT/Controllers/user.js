const { model } = require('mongoose');
const User = require('../models/user')
module.exports.register = async(req,res)=>{
    try{
    const {email,username,password} =req.body;
    const user = new User({email,username})
    const registerUser = await User.register(user,password);
    console.log(registerUser);
    req.login(registerUser,(err)=>{
        if(err){
        return next(err);
        }
        req.flash('success','Welcome to the Campground!');
        res.redirect('/campgrounds')
    })
   
    }
    catch(error){
        req.flash('error',error.message);
        res.redirect('/register')
    }
}

module.exports.renderregister = (req,res)=>{
    res.render('users/register')
}

module.exports.renderlogin = (req,res)=>{
    res.render('users/login')
}

module.exports.login = (req,res)=>{

    req.flash('success','Welcome, You have been Successfully logined')
    const redirectUrl = res.locals.returnTo || '/campgrounds';
    res.redirect(redirectUrl)
}


module.exports.logout = ((req,res,next)=>{
    req.logout(function (err){
        if(err){
            return next(err);
        }
        req.flash('success','You successfully Logout')
        res.redirect('/campgrounds')
    });
    
})