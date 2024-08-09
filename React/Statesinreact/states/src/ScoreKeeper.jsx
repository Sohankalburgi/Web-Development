import { useState } from "react";

// the newstate must me made as it doesnot identify the inner as it the refrence of object
export default function ScoreKeeper(){
    const [state,setState] = useState({p1Score:0,p2Score:0});
    const [color1,setColor1] = useState("white");
    const [color2,setColor2] = useState("white");
    const [buttonstate,setbuttonstate] = useState(false)

    const button1click = ()=>{
        const newState = {...state};
        newState.p1Score ++;
        if(newState.p1Score==10){
            setColor1("Green")
            setColor2("red")
            setbuttonstate(true)
        }
        setState(newState)
    }

    const button2click = ()=>{
        const newState = {...state};
        newState.p2Score ++;
        if(newState.p2Score==10){
            setColor2("Green")
            setColor1("red")
            setbuttonstate(true)
        }
        setState(newState)
    }
    
    return(<>
        <div className="main-container">
            <div className="scorecard">
                <h1 className="heading" style={{color:color1}}>Player 1 Score</h1>
                <div>
                    <h1 className="Score" style={{color:color1}}>{state.p1Score}</h1>
                </div>
                <button className="playerbutton1" disabled={buttonstate} onClick={button1click}> +1</button>
            </div>
            <div className="scorecard">
                <h1 className="heading" style={{color:color2}}>Player 2 score</h1>
                <div>
                <h1 className="Score" style={{color:color2}}>{state.p2Score}</h1>
                </div>
                <button className="playerbutton2" disabled={buttonstate}  onClick={button2click}>+1</button>
            </div>
            
        </div>
        
        </>
    )
}