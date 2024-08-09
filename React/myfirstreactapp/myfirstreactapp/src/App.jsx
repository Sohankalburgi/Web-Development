import './App.css'
import Greet from './Greeter'
import RollDie from './DIe';
import DisplayList from './Arraylist';

function App() {
 
  return (
    <div>
      <Greet person="sohan" from="pragathi"/>
      <RollDie maxDie={4}/>
      <DisplayList values={[2,4,6,8,10,12,14,16,18,20]} />
    </div>
  );
}

export default App
