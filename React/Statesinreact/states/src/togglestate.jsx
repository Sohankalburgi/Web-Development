import { useState } from "react"

export default function Toggle(){

    const [emoji,setemoji] = useState("😪")
    
    const changeEmoji = () =>{
        if(emoji !== "😵")
        {setemoji("😵")}
        else{
            setemoji("😪")
        }
    } 
   
    return (
    <>
    <button onClick={changeEmoji}  style={{margin:"20px",width:"200px",height:"200px",padding:"1px"}}>
        <h1 style={{fontSize:"6rem"}}>{emoji}</h1></button>
    </>)
}