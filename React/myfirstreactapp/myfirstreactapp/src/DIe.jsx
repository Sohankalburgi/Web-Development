export default function RollDie({maxDie}){
    console.log(maxDie);
    const rollDie = Math.floor(Math.random()*maxDie)+1; 
    return <h2> The Die is : {rollDie}</h2>   
}