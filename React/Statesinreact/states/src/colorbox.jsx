import { useState } from 'react'
import './ColorBox.css'

function randomColor(colors){
    return colors[Math.floor(Math.random()*colors.length)];
}


export default function ColorBox({colors}){
    const [color,setColor] = useState(randomColor(colors));

    const setColorfromarray = ()=>{
        const randomcolor = randomColor(colors);
        console.log(randomcolor)
        setColor(randomcolor);
    }

    return(
        <div onClick={setColorfromarray} className='container' style={{backgroundColor:color}}>
            
        </div>
    )
}