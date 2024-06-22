function rollDie(numofsides){
    if(numofsides!=undefined){
    return Math.floor(Math.random()*numofsides)+1;
    }
    return "default roll is 6";

}


// easier method for the above

function rollDieeasier(numofsides=6){
    return Math.floor(Math.random()*numofsides)+1
}