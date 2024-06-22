const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

numbers.forEach(function (ele)
{
    console.log(ele);
})

const mappedarray = numbers.map(function (num){
    return num*2;
})

const movies = [
    {
        movie:"Avatar 2",
        rating : 5.0
    },
    {
        movie:"21 st Jump street",
        rating : 3.7
    },
    {
        movie: "interstellar",
        rating : 4.7
    }
]

const movieName = movies.map(function(mov){
    return mov.movie;
})

const movierating = movies.map(function(movie){
    return movie.rating;
})


// arrow function just like lambda expression

const add = (x,y)=>{
    return x+y;
} 

// more better arrow function implicit 
// this implicit returns will only work in one line expression
const addbetter = (x,y) =>(x+y);

const moviebetter = movies.map((mov)=> mov.movie);


const moviefilter = movies.filter((movie)=> movie.rating>4.0)


function validUserNames(usernames) {
    // your code here
      return usernames.filter((names)=> names.length<10);
  }


function allEvens(args){
    return args.every(n=>n%2==0)
}