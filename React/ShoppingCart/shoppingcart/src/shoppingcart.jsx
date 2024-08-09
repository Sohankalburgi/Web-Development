function ShoppingList({items}){
console.log(items)

return(
    <ul>
        {items.map(i=>(
            <li key={i.id}  
            style={{color:"red"}}>
                {i.item}
            </li>
        ))}
    </ul>
);
}

export default ShoppingList;