import './App.css'
import ShoppingList from './shoppingcart'
import PropertyList from './PropertyList'

const data = [
  { id:1,item:"eggs", quantity:12, completed:false },
  { id:2 ,item:"pineapple", quantity:1, completed:false },
  { id:3, item:"apple", quantity:10, completed:false },
  { id:4 ,item:"mango", quantity:13, completed:false }
]

const properties = [
  {id:123, name:"bangalore", rating:5 , price : 100},
  {id:124, name:"mumbai",rating:4,price:98},
  {id:125, name:'Noida', rating:4.5, price : 100}
]

function App() {
  return (
    <>
    <h1>hello</h1>
    {/* <ShoppingList items={data}/> */}
    <PropertyList properties={properties}/>
    </>
  )
}

export default App
