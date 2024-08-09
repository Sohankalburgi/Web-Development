import ColorBoxList from './colorboxlist'
import './App.css'
import Counter from './counter'
import Toggle from './togglestate'
import ScoreKeeper from './ScoreKeeper'

const colors = [
  "red", "blue", "green", "yellow", "orange", "pink", "grey", "white",
  "purple"
]

function App() {


  return (
    <>
      <h1>Score Keeper</h1>
      {/* <Counter/>
      <Toggle/> */}
      {/* <ColorBoxList colors={colors}/> */}
      <ScoreKeeper/>
    </>
  )
}

export default App
