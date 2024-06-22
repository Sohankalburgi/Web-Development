// the arguments will not make the kind of normal array
function sum(){
    console.log(arguments);
}

// In order to solve this we use rest which is similar to spread

function sumofrest(...no){
     return no.reduce((res,i)=> res+i);
}

function raceresult(gold,silver,...everyoneelse){
    console.log(`the gold winner is : ${gold}`);
    console.log(`the silver winner is : ${silver}`);
    console.log(`Everyone else : ${everyoneelse}`);
}