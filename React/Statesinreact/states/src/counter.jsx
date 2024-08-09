import {useState} from 'react';

export default function Counter(){ 
    const [num, setNum] = useState(5);
    const changeNum = ()=>{
        setNum(num+1);
    }
    return (
    <>
        <h3>The count value is :{num}</h3>
        <button onClick={changeNum}>Increment </button>
    </>)
}