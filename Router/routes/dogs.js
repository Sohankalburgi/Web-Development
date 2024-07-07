const express = require('express')

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('This is ALL Dogs')
})

router.get('/:id',(req,res)=>{
    res.send('This veiwing one DOg')
})

router.get('/:id/edit',(req,res)=>{
    res.send('this is editing one dog')
})

router.post('/new',(req,res)=>{
    res.send('this is creating new dog');
})

module.exports = router