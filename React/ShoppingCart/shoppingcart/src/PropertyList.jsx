import Property from "./propertylis";

export default function PropertyList({properties}){
    return(
    <ul>
        {properties.map((i)=>(
            <Property key={i.id} name={i.name} rating={i.rating} price={i.price} />
        ))}
    </ul>
    );
}