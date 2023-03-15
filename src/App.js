import React, {useState} from 'react'
import './App.css'
import Laskuri from './Laskuri'
import Posts from './Posts'

function App() {

  // State määritys
const [showLaskuri, setShowLaskuri] = useState(false)

  return (
    <div className="App">

      <h1>Northwind Traders Ltd.</h1>

      {showLaskuri ? <button onClick={() => setShowLaskuri(false)}>piilota laskuri</button> : 
      <button onClick={() => setShowLaskuri(true)}>näytä laskuri</button>}

      {!showLaskuri && <button onClick={() => setShowLaskuri(true)}>näytä laskuri</button>}
      {showLaskuri && <button onClick={() => setShowLaskuri(false)}>piilota laskuri</button>}
      {showLaskuri && <Laskuri viesti="Tervehdys app komponentista" />}
    
      <Posts />


    </div>
  )
}

export default App
