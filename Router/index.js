const express = require('express')
const app = express();

const ShelterRoutes = require('./routes/shelter')
const DogRoutes = require('./routes/dogs')
const AdminRoutes = require('./routes/admin')

app.use('/shelters',ShelterRoutes);
app.use('/dogs',DogRoutes)
app.use('/admin',AdminRoutes)
app.listen(3000,()=>{
    console.log('Server started ON port 3000')
    console.log('The routers are : \n '+ShelterRoutes)
})

