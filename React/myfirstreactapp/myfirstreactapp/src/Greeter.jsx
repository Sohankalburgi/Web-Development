import './GreeterCSS.css'

export default function Greet({person,from}){
    
    return <h1 className='text-center'> Hi There! {person} from {from}</h1>
}