export default function DisplayList({values}){
    const randindex = Math.floor(Math.random()*values.length);
    return (
        <>
        <p>The list values = {values}</p>
        <p>The values of random index of {randindex} index is : {values[randindex]} </p>
        </>
    )
}