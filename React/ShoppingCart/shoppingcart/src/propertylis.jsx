export default function Property({name,rating,price}){
    
    return (
    <>
    <li style={{fontSize:"20px",
      margin:"5px"  
    }}>
        Name : {name}<br/>
        Rating : {rating}<br/>
        Price : {price}<br/>
        </li>
    </>
    );
}