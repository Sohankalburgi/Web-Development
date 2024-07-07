const express = require('express')
const router = express.Router();

//middleware on only the router
router.use((req,res,next)=>{
    if(req.query.isAdmin){
        next();
    }
    res.send('Sorry your not admin')
})

router.get('/topsecret',(req,res)=>{
    res.send('This is the topsecret')
})

router.get('/deleteall',(req,res)=>{
    res.send('this is the deleteAll')
})

module.exports = router