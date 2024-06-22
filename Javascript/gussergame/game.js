
let maximum = parseInt(prompt("Enter the Max Number"));

const MaxNumber = Math.floor(Math.random()*maximum)+1;
console.log(MaxNumber);


let number = parseInt(prompt("Guess the Number first time"));

let count = 1;

while(true){

    if(number==MaxNumber){
        console.log(`You Won by ${count} Guesses`);
        break;
    }
    else if(number>MaxNumber){
        number = parseInt(prompt("Too High, Guess Number"));
        count++;
    }
    else{
        number = parseInt(prompt("Too low,Guess Number"));
        count++;
    }
}

console.log("The game is finished");