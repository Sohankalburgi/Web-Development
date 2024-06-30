const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')
.then(()=>[
    console.log("Connection Established Successfully")
])
.catch(err=>{
    console.log("Internal Connection Error")
})

const movieSchema = new mongoose.Schema({
    title : String,
    year : Number,
    score : Number,
    rating : String,
});

// This .model will create the collection of singular movie to movies and it needs the schema
const Movie = mongoose.model('Movie',movieSchema);

const naruto = new Movie({title:"Naruto",rating:"9.8",score:100,year:2000});

Movie.insertMany([
    {title:"Blue Lock",rating:"8.0",score:80,year:2023},
    {title:"Blue Excorist",rating:"8.5",score:85,year:2006},
    {title:"Solo Leveling",rating:"9.5",score:95,year:2024}
]).then((data)=>{
    console.log("IT WORKED");
    console.log(data);  
}).catch(err=>{
    console.log("ERROR");
    console.log(err);
})