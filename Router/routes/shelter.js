const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("All Shelters!!!")
})

router.get('/:id', (req,res)=>{
    res.send('Viewing one Shelter')
})

router.get('/:id/edit',(req,res)=>{
    res.send('Editing one Shelter')
})

router.post('/new',(req,res)=>{
    res.send('Creating new Shelter')
})

module.exports = router;