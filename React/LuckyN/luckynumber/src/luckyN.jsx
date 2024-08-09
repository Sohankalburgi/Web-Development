import { useState } from "react";
import Dice from "./Dice";
import {makerandom} from "./utils"

export default function LuckyN(){
    const [state,setState] = useState(() =>makerandom(2));
    
    let flag = false;
    if(parseInt(state[0])+parseInt(state[1])==7){
        flag=true;
    }

    const rollDie = ()=>{
        setState(makerandom(2))
    }

    return (
    <>
    <h2 style={{textAlign:"center"}}>{flag? "YOU WIN" : "YOU LOSE"}</h2>
    <Dice dice={state}/>
    <button style={{marginLeft:"45%",fontSize:"20pt"}} onClick={rollDie}>Roll Die</button>
    </>
)
}