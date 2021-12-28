import { useState } from "react"
import { Item } from './components/ItemComponent'
function App() {
  const [itens, setItens] = useState<string[]>([])
  function addItensToList() {
    setItens([...itens, `item ${itens.length}`])
  }
  return (
    <div className="App">
      <button onClick={addItensToList}>add</button>
    
      <ul>
        {itens.map(item => (
          <Item key={item} title={item} />
        ))}
      </ul>
    </div>
  )
}

export default App
