import Die from "./DIe";

export default function Dice({dice}){
    
    return(
        <div className="dice">
            {dice.map((val,k)=>(
                <Die key={k} className="dice" number={val}/>
            ))}
        </div>
    )
}